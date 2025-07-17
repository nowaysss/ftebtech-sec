import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/components/FlappyBird/FlappyBird.scss';

const FlappyBird = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef({
    isRunning: false,
    score: 0,
    highScore: parseInt(localStorage.getItem('flappyHighScore') || '0'),
    gameSpeed: 2,
    gravity: 0.6,
    jumpPower: -12,
    gameWidth: 800,
    gameHeight: 600
  });

  const birdRef = useRef({
    x: 100,
    y: 300,
    width: 34,
    height: 24,
    velocity: 0,
    rotation: 0
  });

  const pipesRef = useRef([]);
  const animationRef = useRef();

  const [gameState, setGameState] = useState('waiting'); // waiting, playing, gameOver
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(gameRef.current.highScore);

  // Initialize game
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // Maintain aspect ratio
      const aspectRatio = 4/3;
      let canvasWidth = containerWidth;
      let canvasHeight = containerWidth / aspectRatio;
      
      if (canvasHeight > containerHeight) {
        canvasHeight = containerHeight;
        canvasWidth = containerHeight * aspectRatio;
      }
      
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      
      gameRef.current.gameWidth = canvasWidth;
      gameRef.current.gameHeight = canvasHeight;
      
      // Reset bird position
      birdRef.current.x = canvasWidth * 0.125;
      birdRef.current.y = canvasHeight * 0.5;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Handle input
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJump();
      }
    };

    const handleClick = (e) => {
      e.preventDefault();
      handleJump();
    };

    const handleTouch = (e) => {
      e.preventDefault();
      handleJump();
    };

    window.addEventListener('keydown', handleKeyPress);
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('click', handleClick);
      canvas.addEventListener('touchstart', handleTouch);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      if (canvas) {
        canvas.removeEventListener('click', handleClick);
        canvas.removeEventListener('touchstart', handleTouch);
      }
    };
  }, [gameState]);

  const handleJump = useCallback(() => {
    if (gameState === 'waiting' || gameState === 'gameOver') {
      startGame();
    } else if (gameState === 'playing') {
      jump();
    }
  }, [gameState]);

  const startGame = useCallback(() => {
    gameRef.current.isRunning = true;
    gameRef.current.score = 0;
    pipesRef.current = [];
    
    // Reset bird
    birdRef.current.y = gameRef.current.gameHeight * 0.5;
    birdRef.current.velocity = 0;
    birdRef.current.rotation = 0;

    setGameState('playing');
    setScore(0);
    gameLoop();
  }, []);

  const jump = useCallback(() => {
    birdRef.current.velocity = gameRef.current.jumpPower;
    birdRef.current.rotation = -25;
  }, []);

  const spawnPipe = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const pipeWidth = 80;
    const pipeGap = 200;
    const minPipeHeight = 50;
    const maxPipeHeight = canvas.height - pipeGap - minPipeHeight;
    
    const topPipeHeight = Math.random() * (maxPipeHeight - minPipeHeight) + minPipeHeight;
    const bottomPipeY = topPipeHeight + pipeGap;

    pipesRef.current.push({
      x: canvas.width,
      topHeight: topPipeHeight,
      bottomY: bottomPipeY,
      bottomHeight: canvas.height - bottomPipeY,
      width: pipeWidth,
      passed: false
    });
  }, []);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bird = birdRef.current;
    
    // Update bird physics
    bird.velocity += gameRef.current.gravity;
    bird.y += bird.velocity;
    
    // Update bird rotation
    if (bird.velocity > 0) {
      bird.rotation = Math.min(bird.rotation + 3, 90);
    }

    // Check boundaries
    if (bird.y <= 0 || bird.y + bird.height >= canvas.height) {
      gameOver();
      return;
    }

    // Update pipes
    pipesRef.current = pipesRef.current.filter(pipe => {
      pipe.x -= gameRef.current.gameSpeed;
      
      // Check if bird passed pipe
      if (!pipe.passed && bird.x > pipe.x + pipe.width) {
        pipe.passed = true;
        gameRef.current.score += 1;
        setScore(gameRef.current.score);
      }
      
      return pipe.x + pipe.width > 0;
    });

    // Spawn new pipes
    if (pipesRef.current.length === 0 || 
        pipesRef.current[pipesRef.current.length - 1].x < canvas.width - 300) {
      spawnPipe();
    }

    // Check collisions
    for (let pipe of pipesRef.current) {
      if (bird.x < pipe.x + pipe.width &&
          bird.x + bird.width > pipe.x) {
        if (bird.y < pipe.topHeight ||
            bird.y + bird.height > pipe.bottomY) {
          gameOver();
          return;
        }
      }
    }
  }, []);

  const gameOver = useCallback(() => {
    gameRef.current.isRunning = false;
    setGameState('gameOver');

    if (gameRef.current.score > gameRef.current.highScore) {
      gameRef.current.highScore = gameRef.current.score;
      localStorage.setItem('flappyHighScore', gameRef.current.score.toString());
      setHighScore(gameRef.current.score);
    }
  }, []);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas with sky blue background
    ctx.fillStyle = '#70c5ce';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw clouds
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 3; i++) {
      const x = (i * 300 + 100) % canvas.width;
      const y = 50 + i * 30;
      drawCloud(ctx, x, y);
    }

    // Draw pipes
    ctx.fillStyle = '#228b22';
    pipesRef.current.forEach(pipe => {
      // Top pipe
      ctx.fillRect(pipe.x, 0, pipe.width, pipe.topHeight);
      // Pipe cap
      ctx.fillRect(pipe.x - 5, pipe.topHeight - 30, pipe.width + 10, 30);
      
      // Bottom pipe
      ctx.fillRect(pipe.x, pipe.bottomY, pipe.width, pipe.bottomHeight);
      // Pipe cap
      ctx.fillRect(pipe.x - 5, pipe.bottomY, pipe.width + 10, 30);
    });

    // Draw bird
    const bird = birdRef.current;
    ctx.save();
    ctx.translate(bird.x + bird.width/2, bird.y + bird.height/2);
    ctx.rotate(bird.rotation * Math.PI / 180);
    
    // Bird body
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(-bird.width/2, -bird.height/2, bird.width, bird.height);
    
    // Bird wing
    ctx.fillStyle = '#ffa500';
    ctx.fillRect(-bird.width/2 + 5, -bird.height/2 + 3, 15, 8);
    
    // Bird eye
    ctx.fillStyle = '#000000';
    ctx.fillRect(-bird.width/2 + 20, -bird.height/2 + 3, 6, 6);
    
    // Bird beak
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(bird.width/2 - 2, -3, 8, 6);
    
    ctx.restore();

    // Draw score
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.max(24, canvas.width * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeText(gameRef.current.score.toString(), canvas.width / 2, 60);
    ctx.fillText(gameRef.current.score.toString(), canvas.width / 2, 60);

    // Draw game state messages
    if (gameState === 'waiting') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `${Math.max(32, canvas.width * 0.04)}px Arial`;
      ctx.textAlign = 'center';
      ctx.strokeText('Flappy Bird', canvas.width / 2, canvas.height / 2 - 50);
      ctx.fillText('Flappy Bird', canvas.width / 2, canvas.height / 2 - 50);
      
      ctx.font = `${Math.max(20, canvas.width * 0.025)}px Arial`;
      ctx.strokeText('Tap or Press SPACE to start', canvas.width / 2, canvas.height / 2);
      ctx.fillText('Tap or Press SPACE to start', canvas.width / 2, canvas.height / 2);
    } else if (gameState === 'gameOver') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `${Math.max(32, canvas.width * 0.04)}px Arial`;
      ctx.textAlign = 'center';
      ctx.strokeText('Game Over!', canvas.width / 2, canvas.height / 2 - 50);
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2 - 50);
      
      ctx.font = `${Math.max(20, canvas.width * 0.025)}px Arial`;
      ctx.strokeText(`Score: ${gameRef.current.score}`, canvas.width / 2, canvas.height / 2);
      ctx.fillText(`Score: ${gameRef.current.score}`, canvas.width / 2, canvas.height / 2);
      
      ctx.strokeText(`High Score: ${gameRef.current.highScore}`, canvas.width / 2, canvas.height / 2 + 30);
      ctx.fillText(`High Score: ${gameRef.current.highScore}`, canvas.width / 2, canvas.height / 2 + 30);
      
      ctx.strokeText('Tap or Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 70);
      ctx.fillText('Tap or Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 70);
    }
  }, [gameState]);

  const drawCloud = (ctx, x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y, 25, 0, Math.PI * 2);
    ctx.arc(x + 50, y, 20, 0, Math.PI * 2);
    ctx.arc(x + 25, y - 15, 20, 0, Math.PI * 2);
    ctx.fill();
  };

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
    <div className="flappy-bird-game">
      <div className="game-info">
        <div className="score-display">
          <span>Score: {score}</span>
          <span>High Score: {highScore}</span>
        </div>
        <div className="game-controls">
          <span>TAP or SPACE: Flap</span>
        </div>
      </div>
      
      <div className="game-container">
        <canvas
          ref={canvasRef}
          className="game-canvas"
          tabIndex={0}
        />
      </div>
      
      {gameState === 'waiting' && (
        <div className="game-overlay">
          <h3>🐦 Flappy Bird</h3>
          <p>Tap or press SPACE to flap your wings!</p>
          <div className="controls-hint">
            <span>🖱️ Click to flap</span>
            <span>📱 Tap to flap</span>
            <span>⌨️ SPACE to flap</span>
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

export default FlappyBird;