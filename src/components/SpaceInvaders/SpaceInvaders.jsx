import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/components/SpaceInvaders/SpaceInvaders.scss';

const SpaceInvaders = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef({
    isRunning: false,
    score: 0,
    highScore: parseInt(localStorage.getItem('spaceInvadersHighScore') || '0'),
    level: 1,
    gameSpeed: 1,
    gameWidth: 800,
    gameHeight: 600
  });

  const playerRef = useRef({
    x: 400,
    y: 550,
    width: 40,
    height: 30,
    speed: 5,
    lives: 3
  });

  const aliensRef = useRef([]);
  const bulletsRef = useRef([]);
  const alienBulletsRef = useRef([]);
  const shieldsRef = useRef([]);
  const animationRef = useRef();
  const keysRef = useRef({});

  const [gameState, setGameState] = useState('waiting'); // waiting, playing, gameOver, levelComplete
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(gameRef.current.highScore);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);

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
      
      // Reset player position
      playerRef.current.x = canvasWidth * 0.5 - playerRef.current.width * 0.5;
      playerRef.current.y = canvasHeight - 50;
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
    const handleKeyDown = (e) => {
      keysRef.current[e.code] = true;
      
      if (e.code === 'Space') {
        e.preventDefault();
        if (gameState === 'waiting' || gameState === 'gameOver') {
          startGame();
        } else if (gameState === 'playing') {
          shoot();
        }
      }
    };

    const handleKeyUp = (e) => {
      keysRef.current[e.code] = false;
    };

    const handleClick = (e) => {
      e.preventDefault();
      if (gameState === 'waiting' || gameState === 'gameOver') {
        startGame();
      } else if (gameState === 'playing') {
        shoot();
      }
    };

    const handleTouch = (e) => {
      e.preventDefault();
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      
      if (gameState === 'playing') {
        // Move player towards touch position
        const centerX = x * (canvas.width / rect.width);
        if (centerX < playerRef.current.x + playerRef.current.width / 2) {
          keysRef.current['ArrowLeft'] = true;
          keysRef.current['ArrowRight'] = false;
        } else {
          keysRef.current['ArrowRight'] = true;
          keysRef.current['ArrowLeft'] = false;
        }
        shoot();
      } else {
        startGame();
      }
    };

    const handleTouchEnd = (e) => {
      e.preventDefault();
      keysRef.current['ArrowLeft'] = false;
      keysRef.current['ArrowRight'] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('click', handleClick);
      canvas.addEventListener('touchstart', handleTouch);
      canvas.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      if (canvas) {
        canvas.removeEventListener('click', handleClick);
        canvas.removeEventListener('touchstart', handleTouch);
        canvas.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [gameState]);

  const startGame = useCallback(() => {
    gameRef.current.isRunning = true;
    gameRef.current.score = 0;
    gameRef.current.level = 1;
    
    // Reset player
    playerRef.current.x = gameRef.current.gameWidth * 0.5 - playerRef.current.width * 0.5;
    playerRef.current.y = gameRef.current.gameHeight - 50;
    playerRef.current.lives = 3;
    
    // Clear arrays
    bulletsRef.current = [];
    alienBulletsRef.current = [];
    
    setGameState('playing');
    setScore(0);
    setLives(3);
    setLevel(1);
    
    createAliens();
    createShields();
    gameLoop();
  }, []);

  const createAliens = useCallback(() => {
    aliensRef.current = [];
    const rows = 5;
    const cols = 10;
    const alienWidth = 30;
    const alienHeight = 20;
    const spacing = 10;
    const startX = (gameRef.current.gameWidth - (cols * (alienWidth + spacing))) / 2;
    const startY = 50;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        aliensRef.current.push({
          x: startX + col * (alienWidth + spacing),
          y: startY + row * (alienHeight + spacing),
          width: alienWidth,
          height: alienHeight,
          type: row < 1 ? 'ufo' : row < 3 ? 'medium' : 'small',
          alive: true,
          animFrame: 0
        });
      }
    }
  }, []);

  const createShields = useCallback(() => {
    shieldsRef.current = [];
    const shieldCount = 4;
    const shieldWidth = 60;
    const shieldHeight = 40;
    const spacing = (gameRef.current.gameWidth - (shieldCount * shieldWidth)) / (shieldCount + 1);

    for (let i = 0; i < shieldCount; i++) {
      const shield = {
        x: spacing + i * (shieldWidth + spacing),
        y: gameRef.current.gameHeight - 150,
        width: shieldWidth,
        height: shieldHeight,
        blocks: []
      };

      // Create shield blocks
      const blockSize = 4;
      for (let y = 0; y < shieldHeight; y += blockSize) {
        for (let x = 0; x < shieldWidth; x += blockSize) {
          // Create shield shape
          const centerX = shieldWidth / 2;
          const centerY = shieldHeight / 2;
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          
          if (distance < 25 && y < shieldHeight - 10) {
            shield.blocks.push({
              x: shield.x + x,
              y: shield.y + y,
              width: blockSize,
              height: blockSize,
              destroyed: false
            });
          }
        }
      }
      
      shieldsRef.current.push(shield);
    }
  }, []);

  const shoot = useCallback(() => {
    const player = playerRef.current;
    const now = Date.now();
    
    // Limit shooting rate
    if (!player.lastShot || now - player.lastShot > 200) {
      bulletsRef.current.push({
        x: player.x + player.width / 2 - 2,
        y: player.y,
        width: 4,
        height: 10,
        speed: -8
      });
      player.lastShot = now;
    }
  }, []);

  const alienShoot = useCallback(() => {
    const aliveAliens = aliensRef.current.filter(alien => alien.alive);
    if (aliveAliens.length === 0) return;

    // Random alien shoots
    if (Math.random() < 0.02) {
      const alien = aliveAliens[Math.floor(Math.random() * aliveAliens.length)];
      alienBulletsRef.current.push({
        x: alien.x + alien.width / 2 - 2,
        y: alien.y + alien.height,
        width: 4,
        height: 10,
        speed: 3
      });
    }
  }, []);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const player = playerRef.current;

    // Update player movement
    if (keysRef.current['ArrowLeft'] && player.x > 0) {
      player.x -= player.speed;
    }
    if (keysRef.current['ArrowRight'] && player.x < canvas.width - player.width) {
      player.x += player.speed;
    }

    // Update bullets
    bulletsRef.current = bulletsRef.current.filter(bullet => {
      bullet.y += bullet.speed;
      return bullet.y > 0;
    });

    // Update alien bullets
    alienBulletsRef.current = alienBulletsRef.current.filter(bullet => {
      bullet.y += bullet.speed;
      return bullet.y < canvas.height;
    });

    // Update aliens
    let moveDown = false;
    const aliveAliens = aliensRef.current.filter(alien => alien.alive);
    
    if (aliveAliens.length > 0) {
      const leftMost = Math.min(...aliveAliens.map(alien => alien.x));
      const rightMost = Math.max(...aliveAliens.map(alien => alien.x + alien.width));
      
      if (leftMost <= 0 || rightMost >= canvas.width) {
        moveDown = true;
        gameRef.current.gameSpeed *= -1;
      }
    }

    aliensRef.current.forEach(alien => {
      if (!alien.alive) return;
      
      if (moveDown) {
        alien.y += 20;
      } else {
        alien.x += gameRef.current.gameSpeed;
      }
      
      alien.animFrame = (alien.animFrame + 1) % 60;
    });

    // Check alien collisions with bullets
    bulletsRef.current.forEach((bullet, bulletIndex) => {
      aliensRef.current.forEach((alien, alienIndex) => {
        if (alien.alive &&
            bullet.x < alien.x + alien.width &&
            bullet.x + bullet.width > alien.x &&
            bullet.y < alien.y + alien.height &&
            bullet.y + bullet.height > alien.y) {
          
          alien.alive = false;
          bulletsRef.current.splice(bulletIndex, 1);
          
          // Add score based on alien type
          const points = alien.type === 'ufo' ? 30 : alien.type === 'medium' ? 20 : 10;
          gameRef.current.score += points;
          setScore(gameRef.current.score);
        }
      });
    });

    // Check shield collisions
    [...bulletsRef.current, ...alienBulletsRef.current].forEach((bullet, bulletIndex, bulletArray) => {
      shieldsRef.current.forEach(shield => {
        shield.blocks.forEach(block => {
          if (!block.destroyed &&
              bullet.x < block.x + block.width &&
              bullet.x + bullet.width > block.x &&
              bullet.y < block.y + block.height &&
              bullet.y + bullet.height > block.y) {
            
            block.destroyed = true;
            bulletArray.splice(bulletIndex, 1);
          }
        });
      });
    });

    // Check player collisions with alien bullets
    alienBulletsRef.current.forEach((bullet, bulletIndex) => {
      if (bullet.x < player.x + player.width &&
          bullet.x + bullet.width > player.x &&
          bullet.y < player.y + player.height &&
          bullet.y + bullet.height > player.y) {
        
        alienBulletsRef.current.splice(bulletIndex, 1);
        player.lives--;
        setLives(player.lives);
        
        if (player.lives <= 0) {
          gameOver();
          return;
        }
      }
    });

    // Check if aliens reached player
    const lowestAlien = Math.max(...aliensRef.current.filter(alien => alien.alive).map(alien => alien.y));
    if (lowestAlien >= player.y - 20) {
      gameOver();
      return;
    }

    // Check if all aliens destroyed
    if (aliensRef.current.every(alien => !alien.alive)) {
      levelComplete();
      return;
    }

    // Alien shooting
    alienShoot();
  }, []);

  const levelComplete = useCallback(() => {
    gameRef.current.level++;
    setLevel(gameRef.current.level);
    gameRef.current.gameSpeed = Math.sign(gameRef.current.gameSpeed) * (1 + gameRef.current.level * 0.2);
    
    // Bonus points for completing level
    gameRef.current.score += 100;
    setScore(gameRef.current.score);
    
    createAliens();
    createShields();
  }, []);

  const gameOver = useCallback(() => {
    gameRef.current.isRunning = false;
    setGameState('gameOver');

    if (gameRef.current.score > gameRef.current.highScore) {
      gameRef.current.highScore = gameRef.current.score;
      localStorage.setItem('spaceInvadersHighScore', gameRef.current.score.toString());
      setHighScore(gameRef.current.score);
    }
  }, []);

  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Clear canvas with space background
    ctx.fillStyle = '#000011';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 50; i++) {
      const x = (i * 137) % canvas.width;
      const y = (i * 211) % canvas.height;
      ctx.fillRect(x, y, 1, 1);
    }

    // Draw player
    const player = playerRef.current;
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    // Player details
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(player.x + 5, player.y + 5, 30, 5);
    ctx.fillRect(player.x + 15, player.y, 10, 15);

    // Draw aliens
    aliensRef.current.forEach(alien => {
      if (!alien.alive) return;
      
      const colors = {
        ufo: '#ff0000',
        medium: '#ffff00',
        small: '#00ffff'
      };
      
      ctx.fillStyle = colors[alien.type];
      ctx.fillRect(alien.x, alien.y, alien.width, alien.height);
      
      // Alien animation
      if (alien.animFrame < 30) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(alien.x + 5, alien.y + 5, 5, 5);
        ctx.fillRect(alien.x + 20, alien.y + 5, 5, 5);
      }
    });

    // Draw bullets
    ctx.fillStyle = '#ffffff';
    bulletsRef.current.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw alien bullets
    ctx.fillStyle = '#ff0000';
    alienBulletsRef.current.forEach(bullet => {
      ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    });

    // Draw shields
    ctx.fillStyle = '#00ff00';
    shieldsRef.current.forEach(shield => {
      shield.blocks.forEach(block => {
        if (!block.destroyed) {
          ctx.fillRect(block.x, block.y, block.width, block.height);
        }
      });
    });

    // Draw UI
    ctx.fillStyle = '#ffffff';
    ctx.font = `${Math.max(16, canvas.width * 0.02)}px monospace`;
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${gameRef.current.score}`, 10, 30);
    ctx.fillText(`Lives: ${player.lives}`, 10, 50);
    ctx.fillText(`Level: ${gameRef.current.level}`, 10, 70);
    ctx.fillText(`High: ${gameRef.current.highScore}`, canvas.width - 150, 30);

    // Draw game state messages
    if (gameState === 'waiting') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `${Math.max(32, canvas.width * 0.04)}px monospace`;
      ctx.textAlign = 'center';
      ctx.fillText('SPACE INVADERS', canvas.width / 2, canvas.height / 2 - 50);
      
      ctx.font = `${Math.max(16, canvas.width * 0.02)}px monospace`;
      ctx.fillText('Arrow Keys: Move', canvas.width / 2, canvas.height / 2);
      ctx.fillText('Space/Click/Tap: Shoot', canvas.width / 2, canvas.height / 2 + 25);
      ctx.fillText('Press SPACE to start', canvas.width / 2, canvas.height / 2 + 60);
    } else if (gameState === 'gameOver') {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#ff0000';
      ctx.font = `${Math.max(32, canvas.width * 0.04)}px monospace`;
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 50);
      
      ctx.fillStyle = '#ffffff';
      ctx.font = `${Math.max(20, canvas.width * 0.025)}px monospace`;
      ctx.fillText(`Final Score: ${gameRef.current.score}`, canvas.width / 2, canvas.height / 2);
      ctx.fillText(`Level Reached: ${gameRef.current.level}`, canvas.width / 2, canvas.height / 2 + 30);
      ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 70);
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
    <div className="space-invaders-game">
      <div className="game-info">
        <div className="score-display">
          <span>Score: {score}</span>
          <span>Lives: {lives}</span>
          <span>Level: {level}</span>
          <span>High Score: {highScore}</span>
        </div>
        <div className="game-controls">
          <span>←→: Move | SPACE: Shoot</span>
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
          <h3>👾 Space Invaders</h3>
          <p>Defend Earth from the alien invasion!</p>
          <div className="controls-hint">
            <span>🖱️ Click to shoot</span>
            <span>📱 Tap to move & shoot</span>
            <span>⌨️ Arrow keys + SPACE</span>
          </div>
        </div>
      )}
      
      {gameState === 'gameOver' && (
        <div className="game-overlay game-over">
          <h3>Game Over!</h3>
          <p>Final Score: {score}</p>
          <p>Level Reached: {level}</p>
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

export default SpaceInvaders;