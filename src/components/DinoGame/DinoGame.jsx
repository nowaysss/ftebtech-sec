import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/components/DinoGame/DinoGame.scss';

const DinoGame = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef({
    isRunning: false,
    score: 0,
    highScore: parseInt(localStorage.getItem('dinoHighScore') || '0'),
    gameSpeed: 3,
    gravity: 0.5,
    jumpPower: 12,
    groundY: 0,
    gameWidth: 800,
    gameHeight: 200
  });

  const dinoRef = useRef({
    x: 50,
    y: 0,
    width: 40,
    height: 40,
    dy: 0,
    isJumping: false,
    isDucking: false
  });

  const obstaclesRef = useRef([]);
  const cloudsRef = useRef([]);
  const animationRef = useRef();

  const [gameState, setGameState] = useState('waiting'); // waiting, playing, gameOver
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(gameRef.current.highScore);

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = gameRef.current.gameWidth;
    canvas.height = gameRef.current.gameHeight;
    gameRef.current.groundY = canvas.height - 20;
    dinoRef.current.y = gameRef.current.groundY - dinoRef.current.height;

    // Add some initial clouds
    for (let i = 0; i < 3; i++) {
      cloudsRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * 50 + 20,
        width: 40,
        height: 20,
        speed: 0.5
      });
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        if (gameState === 'waiting' || gameState === 'gameOver') {
          startGame();
        } else if (gameState === 'playing') {
          jump();
        }
      } else if (e.code === 'ArrowDown') {
        e.preventDefault();
        if (gameState === 'playing') {
          duck();
        }
      }
    };

    const handleKeyUp = (e) => {
      if (e.code === 'ArrowDown') {
        e.preventDefault();
        stopDucking();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  const startGame = useCallback(() => {
    gameRef.current.isRunning = true;
    gameRef.current.score = 0;
    gameRef.current.gameSpeed = 2;
    obstaclesRef.current = [];
    
    
    // Reset dino position
    dinoRef.current.y = gameRef.current.groundY - dinoRef.current.height;
    dinoRef.current.dy = 0;
    dinoRef.current.isJumping = false;
    dinoRef.current.isDucking = false;

    setGameState('playing');
    setScore(0);
    gameLoop();
  }, []);

  const jump = useCallback(() => {
    if (!dinoRef.current.isJumping) {
      dinoRef.current.dy = -gameRef.current.jumpPower;
      dinoRef.current.isJumping = true;
    }
  }, []);

  const duck = useCallback(() => {
    if (!dinoRef.current.isJumping) {
      dinoRef.current.isDucking = true;
    }
  }, []);

  const stopDucking = useCallback(() => {
    dinoRef.current.isDucking = false;
  }, []);

  const spawnObstacle = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const obstacleTypes = [
      { width: 20, height: 40, type: 'cactus' },
      { width: 15, height: 30, type: 'small-cactus' },
      { width: 60, height: 25, type: 'bird', y: gameRef.current.groundY - 60 }
    ];

    const obstacle = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
    
    obstaclesRef.current.push({
      x: canvas.width,
      y: obstacle.y || gameRef.current.groundY - obstacle.height,
      width: obstacle.width,
      height: obstacle.height,
      type: obstacle.type
    });
  }, []);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Update dino physics
    if (dinoRef.current.isJumping) {
      dinoRef.current.dy += gameRef.current.gravity;
      dinoRef.current.y += dinoRef.current.dy;

      if (dinoRef.current.y >= gameRef.current.groundY - dinoRef.current.height) {
        dinoRef.current.y = gameRef.current.groundY - dinoRef.current.height;
        dinoRef.current.isJumping = false;
        dinoRef.current.dy = 0;
      }
    }

    // Update obstacles
    obstaclesRef.current = obstaclesRef.current.filter(obstacle => {
      obstacle.x -= gameRef.current.gameSpeed;
      return obstacle.x + obstacle.width > 0;
    });

    // Spawn new obstacles
    if (obstaclesRef.current.length === 0 || 
        obstaclesRef.current[obstaclesRef.current.length - 1].x < canvas.width - 200) {
      if (Math.random() < 0.02) {
        spawnObstacle();
      }
    }

    // Update clouds
    cloudsRef.current.forEach(cloud => {
      cloud.x -= cloud.speed;
      if (cloud.x + cloud.width < 0) {
        cloud.x = canvas.width;
        cloud.y = Math.random() * 50 + 20;
      }
    });

    // Check collisions
    const dino = dinoRef.current;
    const dinoHeight = dino.isDucking ? dino.height / 2 : dino.height;
    const dinoY = dino.isDucking ? dino.y + dino.height / 2 : dino.y;

    for (let obstacle of obstaclesRef.current) {
      if (dino.x < obstacle.x + obstacle.width &&
          dino.x + dino.width > obstacle.x &&
          dinoY < obstacle.y + obstacle.height &&
          dinoY + dinoHeight > obstacle.y) {
        gameOver();
        return;
      }
    }

    // Update score
    gameRef.current.score += 1;
    if (gameRef.current.score % 100 === 0) {
      gameRef.current.gameSpeed += 0.1;
    }

    setScore(Math.floor(gameRef.current.score / 10));
  }, []);

  const gameOver = useCallback(() => {
    gameRef.current.isRunning = false;
    setGameState('gameOver');

    const finalScore = Math.floor(gameRef.current.score / 10);
    if (finalScore > gameRef.current.highScore) {
      gameRef.current.highScore = finalScore;
      localStorage.setItem('dinoHighScore', finalScore.toString());
      setHighScore(finalScore);
    }
  }, []);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = '#f7f7f7';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = '#535353';
    ctx.fillRect(0, gameRef.current.groundY, canvas.width, 2);

    // Draw clouds
    ctx.fillStyle = '#c4c4c4';
    cloudsRef.current.forEach(cloud => {
      ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);
      ctx.fillRect(cloud.x + 10, cloud.y - 5, cloud.width - 20, cloud.height + 10);
    });

    // Draw dino
    const dino = dinoRef.current;
    ctx.fillStyle = '#535353';
    
    if (dino.isDucking) {
      // Draw ducking dino (lower and wider)
      ctx.fillRect(dino.x, dino.y + dino.height / 2, dino.width + 10, dino.height / 2);
      ctx.fillRect(dino.x + 5, dino.y + dino.height / 2 - 5, dino.width - 10, 5);
    } else {
      // Draw normal dino
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
      ctx.fillRect(dino.x + 5, dino.y - 5, dino.width - 10, 5);
      
      // Simple legs animation
      const legOffset = Math.floor(gameRef.current.score / 5) % 2 === 0 ? 0 : 2;
      ctx.fillRect(dino.x + 10, dino.y + dino.height, 5, 8 + legOffset);
      ctx.fillRect(dino.x + 25, dino.y + dino.height, 5, 8 - legOffset);
    }

    // Draw obstacles
    ctx.fillStyle = '#535353';
    obstaclesRef.current.forEach(obstacle => {
      if (obstacle.type === 'bird') {
        // Draw bird
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        ctx.fillRect(obstacle.x + 10, obstacle.y - 5, obstacle.width - 20, 5);
        ctx.fillRect(obstacle.x + 10, obstacle.y + obstacle.height, obstacle.width - 20, 5);
      } else {
        // Draw cactus
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        if (obstacle.type === 'cactus') {
          ctx.fillRect(obstacle.x - 5, obstacle.y + 10, 10, 15);
          ctx.fillRect(obstacle.x + obstacle.width - 5, obstacle.y + 15, 10, 10);
        }
      }
    });

    // Draw score
    ctx.fillStyle = '#535353';
    ctx.font = '16px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(`Score: ${Math.floor(gameRef.current.score / 10)}`, canvas.width - 20, 30);
    ctx.fillText(`High: ${gameRef.current.highScore}`, canvas.width - 20, 50);

    // Draw game state messages
    ctx.textAlign = 'center';
    ctx.font = '20px monospace';
    
    if (gameState === 'waiting') {
      ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height / 2);
      ctx.font = '14px monospace';
      ctx.fillText('Use SPACE to jump, DOWN arrow to duck', canvas.width / 2, canvas.height / 2 + 25);
    } else if (gameState === 'gameOver') {
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
      ctx.font = '14px monospace';
      ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 25);
    }
  }, [gameState]);

  const gameLoop = useCallback(() => {
    if (!gameRef.current.isRunning) return;

    updateGame();
    drawGame();
    animationRef.current = requestAnimationFrame(gameLoop);
  }, [updateGame, drawGame]);

  // Initial draw
  useEffect(() => {
    drawGame();
  }, [drawGame]);

  return (
    <div className="dino-game">
      <div className="game-info">
        <div className="score-display">
          <span>Score: {score}</span>
          <span>High Score: {highScore}</span>
        </div>
        <div className="game-controls">
          <span>SPACE: Jump | ↓: Duck</span>
        </div>
      </div>
      
      <canvas
        ref={canvasRef}
        className="game-canvas"
        tabIndex={0}
      />
      
      {gameState === 'waiting' && (
        <div className="game-overlay">
          <h3>Chrome Dino Game</h3>
          <p>Press SPACE to start playing!</p>
          <div className="controls-hint">
            <span>🦕 SPACE to jump</span>
            <span>⬇️ DOWN arrow to duck</span>
          </div>
        </div>
      )}
      
      {gameState === 'gameOver' && (
        <div className="game-overlay game-over">
          <h3>Game Over!</h3>
          <p>Final Score: {score}</p>
          {score === highScore && score > 0 && (
            <p className="new-record">🎉 New High Score!</p>
          )}
          <button onClick={startGame} className="restart-btn">
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default DinoGame;