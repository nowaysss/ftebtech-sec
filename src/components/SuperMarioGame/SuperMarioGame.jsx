import React, { useState, useEffect, useRef, useCallback } from 'react';
import '../../styles/components/SuperMarioGame/SuperMarioGame.scss';

const SuperMarioGame = () => {
  const canvasRef = useRef(null);
  const gameRef = useRef({
    isRunning: false,
    isPaused: false,
    isMuted: false,
    score: 0,
    lives: 3,
    coins: 0,
    level: '1-1',
    world: 1,
    stage: 1,
    difficulty: 'Normal',
    gameSpeed: 1,
    gravity: 0.8,
    jumpPower: 15,
    runSpeed: 1.5,
    gameWidth: 800,
    gameHeight: 400,
    camera: { x: 0, y: 0 },
    keys: {},
    lastTime: 0,
    deltaTime: 0,
    assets: {
      loaded: false,
      sprites: {},
      sounds: {}
    }
  });

  const marioRef = useRef({
    x: 100,
    y: 300,
    width: 32,
    height: 32,
    vx: 0,
    vy: 0,
    onGround: false,
    facing: 'right',
    state: 'idle',
    invulnerable: false,
    invulnerabilityTime: 0
  });

  const gameObjectsRef = useRef({
    enemies: [],
    coins: [],
    blocks: [],
    pipes: [],
    platforms: []
  });

  const [gameState, setGameState] = useState('menu'); // menu, playing, paused, gameOver, levelSelect
  const [showControls, setShowControls] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentLevel, setCurrentLevel] = useState('1-1');
  const [difficulty, setDifficulty] = useState('Normal');
  const [soundVolume, setSoundVolume] = useState(0.7);
  const [musicVolume, setMusicVolume] = useState(0.5);
  const [touchControls, setTouchControls] = useState({
    opacity: 0.7,
    size: 'medium',
    position: 'bottom'
  });

  const animationRef = useRef();
  const touchRef = useRef({
    left: false,
    right: false,
    jump: false,
    run: false,
    sprint: false
  });

  // Game levels configuration
  const levels = {
    '1-1': { world: 1, stage: 1, name: 'Overworld', unlocked: true },
    '1-2': { world: 1, stage: 2, name: 'Underground', unlocked: false },
    '1-3': { world: 1, stage: 3, name: 'Treetops', unlocked: false },
    '1-4': { world: 1, stage: 4, name: 'Castle', unlocked: false },
    '2-1': { world: 2, stage: 1, name: 'Overworld', unlocked: false },
    '2-2': { world: 2, stage: 2, name: 'Underwater', unlocked: false },
    '2-3': { world: 2, stage: 3, name: 'Treetops', unlocked: false },
    '2-4': { world: 2, stage: 4, name: 'Castle', unlocked: false },
    '3-1': { world: 3, stage: 1, name: 'Overworld', unlocked: false },
    '3-2': { world: 3, stage: 2, name: 'Underground', unlocked: false },
    '3-3': { world: 3, stage: 3, name: 'Treetops', unlocked: false },
    '3-4': { world: 3, stage: 4, name: 'Castle', unlocked: false },
    '4-1': { world: 4, stage: 1, name: 'Overworld', unlocked: false },
    '4-2': { world: 4, stage: 2, name: 'Underground', unlocked: false },
    '4-3': { world: 4, stage: 3, name: 'Treetops', unlocked: false },
    '4-4': { world: 4, stage: 4, name: 'Castle', unlocked: false },
    '5-1': { world: 5, stage: 1, name: 'Overworld', unlocked: false },
    '5-2': { world: 5, stage: 2, name: 'Underground', unlocked: false },
    '5-3': { world: 5, stage: 3, name: 'Treetops', unlocked: false },
    '5-4': { world: 5, stage: 4, name: 'Castle', unlocked: false },
    '6-1': { world: 6, stage: 1, name: 'Overworld', unlocked: false },
    '6-2': { world: 6, stage: 2, name: 'Underground', unlocked: false },
    '6-3': { world: 6, stage: 3, name: 'Treetops', unlocked: false },
    '6-4': { world: 6, stage: 4, name: 'Castle', unlocked: false },
    '7-1': { world: 7, stage: 1, name: 'Overworld', unlocked: false },
    '7-2': { world: 7, stage: 2, name: 'Underground', unlocked: false },
    '7-3': { world: 7, stage: 3, name: 'Treetops', unlocked: false },
    '7-4': { world: 7, stage: 4, name: 'Castle', unlocked: false },
    '8-1': { world: 8, stage: 1, name: 'Overworld', unlocked: false },
    '8-2': { world: 8, stage: 2, name: 'Underground', unlocked: false },
    '8-3': { world: 8, stage: 3, name: 'Treetops', unlocked: false },
    '8-4': { world: 8, stage: 4, name: 'Final Castle', unlocked: false }
  };

  // Initialize game assets
  const initializeAssets = useCallback(() => {
    const game = gameRef.current;
    
    // Create sprite sheets (simplified colored rectangles for demo)
    const createSprite = (color, width = 32, height = 32) => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
      return canvas;
    };

    game.assets.sprites = {
      mario: {
        idle: createSprite('#FF0000'),
        run1: createSprite('#FF4444'),
        run2: createSprite('#FF6666'),
        jump: createSprite('#FF8888')
      },
      enemies: {
        goomba: createSprite('#8B4513'),
        koopa: createSprite('#00FF00')
      },
      blocks: {
        brick: createSprite('#CD853F'),
        question: createSprite('#FFD700'),
        pipe: createSprite('#00FF00', 64, 128)
      },
      items: {
        coin: createSprite('#FFD700', 16, 16),
        mushroom: createSprite('#FF69B4'),
        fireFlower: createSprite('#FF4500')
      },
      background: {
        sky: createSprite('#87CEEB', 800, 400),
        ground: createSprite('#8FBC8F', 800, 100)
      }
    };

    game.assets.loaded = true;
  }, []);

  // Initialize level
  const initializeLevel = useCallback((levelKey) => {
    const mario = marioRef.current;
    const objects = gameObjectsRef.current;
    const game = gameRef.current;

    // Reset Mario
    mario.x = 100;
    mario.y = 300;
    mario.vx = 0;
    mario.vy = 0;
    mario.onGround = false;
    mario.facing = 'right';
    mario.state = 'idle';

    // Reset game state
    game.camera.x = 0;
    game.camera.y = 0;
    game.level = levelKey;

    // Clear objects
    objects.enemies = [];
    objects.coins = [];
    objects.blocks = [];
    objects.pipes = [];
    objects.platforms = [];

    // Generate level based on difficulty
    const difficultyMultiplier = {
      'Easy': 0.7,
      'Normal': 1.0,
      'Hard': 1.5
    }[difficulty];

    // Add ground platforms
    for (let i = 0; i < 50; i++) {
      objects.platforms.push({
        x: i * 32,
        y: 368,
        width: 32,
        height: 32,
        type: 'ground'
      });
    }

    // Add some blocks and enemies
    for (let i = 0; i < 20; i++) {
      const x = 200 + i * 150;
      
      // Add question blocks
      if (Math.random() < 0.3) {
        objects.blocks.push({
          x: x,
          y: 250,
          width: 32,
          height: 32,
          type: 'question',
          hasItem: true,
          item: Math.random() < 0.5 ? 'coin' : 'mushroom'
        });
      }

      // Add enemies
      if (Math.random() < 0.4 * difficultyMultiplier) {
        objects.enemies.push({
          x: x + 50,
          y: 336,
          width: 32,
          height: 32,
          type: 'goomba',
          vx: -1,
          alive: true
        });
      }

      // Add coins
      if (Math.random() < 0.6) {
        objects.coins.push({
          x: x + 100,
          y: 300,
          width: 16,
          height: 16,
          collected: false
        });
      }
    }

    // Add pipes
    objects.pipes.push({
      x: 800,
      y: 240,
      width: 64,
      height: 128,
      type: 'pipe'
    });

  }, [difficulty]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      const game = gameRef.current;
      game.keys[e.code] = true;

      if (gameState === 'playing') {
        switch (e.code) {
          case 'KeyP':
            togglePause();
            break;
          case 'KeyM':
            toggleMute();
            break;
          case 'Escape':
            setGameState('menu');
            break;
          default:
            break;
        }
      } else if (gameState === 'menu') {
        if (e.code === 'Space' || e.code === 'Enter') {
          startGame();
        }
      }
      e.preventDefault();
    };

    const handleKeyUp = (e) => {
      const game = gameRef.current;
      game.keys[e.code] = false;
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState]);

  // Game loop
  const gameLoop = useCallback((currentTime) => {
    const game = gameRef.current;
    const mario = marioRef.current;
    const objects = gameObjectsRef.current;

    if (!game.isRunning || game.isPaused) return;

    // Calculate delta time
    game.deltaTime = currentTime - game.lastTime;
    game.lastTime = currentTime;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dt = game.deltaTime / 16.67; // Normalize to 60fps

    // Update Mario
    updateMario(mario, game, dt);

    // Update enemies
    objects.enemies.forEach(enemy => updateEnemy(enemy, dt));

    // Update camera
    updateCamera(game, mario);

    // Check collisions
    checkCollisions(mario, objects, game);

    // Render game
    render(ctx, game, mario, objects);

    animationRef.current = requestAnimationFrame(gameLoop);
  }, []);

  const updateMario = (mario, game, dt) => {
    const keys = game.keys;

    // Handle input
    let moveSpeed = 3;
    if (keys['ShiftLeft'] || keys['ShiftRight'] || touchRef.current.sprint) {
      moveSpeed = 5;
    }
    if (keys['KeyZ'] || touchRef.current.run) {
      moveSpeed *= game.runSpeed;
    }

    // Horizontal movement
    if (keys['ArrowLeft'] || touchRef.current.left) {
      mario.vx = Math.max(mario.vx - 0.5 * dt, -moveSpeed);
      mario.facing = 'left';
      mario.state = 'run';
    } else if (keys['ArrowRight'] || touchRef.current.right) {
      mario.vx = Math.min(mario.vx + 0.5 * dt, moveSpeed);
      mario.facing = 'right';
      mario.state = 'run';
    } else {
      mario.vx *= 0.8; // Friction
      if (Math.abs(mario.vx) < 0.1) {
        mario.vx = 0;
        mario.state = 'idle';
      }
    }

    // Jumping
    if ((keys['Space'] || keys['ArrowUp'] || touchRef.current.jump) && mario.onGround) {
      mario.vy = -game.jumpPower;
      mario.onGround = false;
      mario.state = 'jump';
    }

    // Apply gravity
    if (!mario.onGround) {
      mario.vy += game.gravity * dt;
    }

    // Update position
    mario.x += mario.vx * dt;
    mario.y += mario.vy * dt;

    // Ground collision
    if (mario.y > 336) {
      mario.y = 336;
      mario.vy = 0;
      mario.onGround = true;
    }

    // Screen boundaries
    if (mario.x < 0) mario.x = 0;

    // Update invulnerability
    if (mario.invulnerable) {
      mario.invulnerabilityTime -= dt;
      if (mario.invulnerabilityTime <= 0) {
        mario.invulnerable = false;
      }
    }
  };

  const updateEnemy = (enemy, dt) => {
    if (!enemy.alive) return;

    enemy.x += enemy.vx * dt;

    // Simple AI - turn around at edges or obstacles
    if (enemy.x < 0 || enemy.x > 1500) {
      enemy.vx *= -1;
    }
  };

  const updateCamera = (game, mario) => {
    // Follow Mario with some offset
    const targetX = mario.x - game.gameWidth / 3;
    game.camera.x = Math.max(0, targetX);
  };

  const checkCollisions = (mario, objects, game) => {
    // Platform collisions
    objects.platforms.forEach(platform => {
      if (mario.x < platform.x + platform.width &&
          mario.x + mario.width > platform.x &&
          mario.y < platform.y + platform.height &&
          mario.y + mario.height > platform.y) {
        
        if (mario.vy > 0 && mario.y < platform.y) {
          mario.y = platform.y - mario.height;
          mario.vy = 0;
          mario.onGround = true;
        }
      }
    });

    // Coin collisions
    objects.coins.forEach(coin => {
      if (!coin.collected &&
          mario.x < coin.x + coin.width &&
          mario.x + mario.width > coin.x &&
          mario.y < coin.y + coin.height &&
          mario.y + mario.height > coin.y) {
        
        coin.collected = true;
        game.coins++;
        game.score += 100;
      }
    });

    // Enemy collisions
    objects.enemies.forEach(enemy => {
      if (!enemy.alive || mario.invulnerable) return;

      if (mario.x < enemy.x + enemy.width &&
          mario.x + mario.width > enemy.x &&
          mario.y < enemy.y + enemy.height &&
          mario.y + mario.height > enemy.y) {
        
        // Check if Mario is jumping on enemy
        if (mario.vy > 0 && mario.y < enemy.y - 10) {
          enemy.alive = false;
          mario.vy = -8; // Bounce
          game.score += 200;
        } else {
          // Mario takes damage
          takeDamage();
        }
      }
    });
  };

  const render = (ctx, game, mario, objects) => {
    const { camera, assets } = game;

    // Clear canvas
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, game.gameWidth, game.gameHeight);

    // Save context for camera transform
    ctx.save();
    ctx.translate(-camera.x, -camera.y);

    // Render ground
    ctx.fillStyle = '#8FBC8F';
    ctx.fillRect(0, 368, 2000, 32);

    // Render platforms
    objects.platforms.forEach(platform => {
      ctx.fillStyle = '#8FBC8F';
      ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
    });

    // Render blocks
    objects.blocks.forEach(block => {
      ctx.fillStyle = block.type === 'question' ? '#FFD700' : '#CD853F';
      ctx.fillRect(block.x, block.y, block.width, block.height);
      
      if (block.type === 'question') {
        ctx.fillStyle = '#000';
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('?', block.x + 16, block.y + 22);
      }
    });

    // Render pipes
    objects.pipes.forEach(pipe => {
      ctx.fillStyle = '#00AA00';
      ctx.fillRect(pipe.x, pipe.y, pipe.width, pipe.height);
      ctx.fillStyle = '#008800';
      ctx.fillRect(pipe.x, pipe.y, pipe.width, 20);
    });

    // Render coins
    objects.coins.forEach(coin => {
      if (!coin.collected) {
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(coin.x + 8, coin.y + 8, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Render enemies
    objects.enemies.forEach(enemy => {
      if (enemy.alive) {
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        
        // Simple face
        ctx.fillStyle = '#000';
        ctx.fillRect(enemy.x + 8, enemy.y + 8, 4, 4);
        ctx.fillRect(enemy.x + 20, enemy.y + 8, 4, 4);
        ctx.fillRect(enemy.x + 12, enemy.y + 20, 8, 4);
      }
    });

    // Render Mario
    const alpha = mario.invulnerable ? 0.5 : 1.0;
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(mario.x, mario.y, mario.width, mario.height);
    
    // Mario's face
    ctx.fillStyle = '#000';
    ctx.fillRect(mario.x + 8, mario.y + 8, 4, 4);
    ctx.fillRect(mario.x + 20, mario.y + 8, 4, 4);
    ctx.fillRect(mario.x + 12, mario.y + 16, 8, 4);
    
    ctx.globalAlpha = 1.0;

    // Restore context
    ctx.restore();

    // Render UI
    renderUI(ctx, game);
  };

  const renderUI = (ctx, game) => {
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.textAlign = 'left';
    
    // Score
    ctx.fillText(`Score: ${game.score}`, 10, 25);
    
    // Coins
    ctx.fillText(`Coins: ${game.coins}`, 10, 45);
    
    // Lives
    ctx.fillText(`Lives: ${game.lives}`, 10, 65);
    
    // Level
    ctx.fillText(`Level: ${game.level}`, 10, 85);
    
    // Time (placeholder)
    ctx.fillText(`Time: 400`, 10, 105);

    // Pause indicator
    if (game.isPaused) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, game.gameWidth, game.gameHeight);
      
      ctx.fillStyle = '#FFF';
      ctx.font = '32px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('PAUSED', game.gameWidth / 2, game.gameHeight / 2);
      ctx.font = '16px Arial';
      ctx.fillText('Press P to resume', game.gameWidth / 2, game.gameHeight / 2 + 40);
    }
  };

  const startGame = () => {
    const game = gameRef.current;
    
    if (!game.assets.loaded) {
      initializeAssets();
    }
    
    initializeLevel(currentLevel);
    
    game.isRunning = true;
    game.isPaused = false;
    game.score = 0;
    game.coins = 0;
    game.lives = 3;
    
    setGameState('playing');
    
    game.lastTime = performance.now();
    animationRef.current = requestAnimationFrame(gameLoop);
  };

  const togglePause = () => {
    const game = gameRef.current;
    game.isPaused = !game.isPaused;
    
    if (!game.isPaused) {
      game.lastTime = performance.now();
      animationRef.current = requestAnimationFrame(gameLoop);
    }
  };

  const toggleMute = () => {
    const game = gameRef.current;
    game.isMuted = !game.isMuted;
  };

  const takeDamage = () => {
    const game = gameRef.current;
    const mario = marioRef.current;
    
    if (mario.invulnerable) return;
    
    game.lives--;
    mario.invulnerable = true;
    mario.invulnerabilityTime = 120; // 2 seconds at 60fps
    
    if (game.lives <= 0) {
      setGameState('gameOver');
      game.isRunning = false;
    }
  };

  const restartGame = () => {
    const game = gameRef.current;
    game.isRunning = false;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    startGame();
  };

  const quitGame = () => {
    const game = gameRef.current;
    game.isRunning = false;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setGameState('menu');
  };

  // Touch controls
  const handleTouchStart = (control) => {
    touchRef.current[control] = true;
  };

  const handleTouchEnd = (control) => {
    touchRef.current[control] = false;
  };

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const game = gameRef.current;
    canvas.width = game.gameWidth;
    canvas.height = game.gameHeight;

    // Initialize assets
    initializeAssets();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initializeAssets]);

  // Render different game states
  const renderGameState = () => {
    switch (gameState) {
      case 'menu':
        return (
          <div className="game-menu">
            <h1>Super Mario Bros</h1>
            <div className="menu-buttons">
              <button onClick={startGame} className="menu-btn primary">
                Start Game
              </button>
              <button onClick={() => setGameState('levelSelect')} className="menu-btn">
                Level Select
              </button>
              <button onClick={() => setShowSettings(true)} className="menu-btn">
                Settings
              </button>
              <button onClick={() => setShowControls(true)} className="menu-btn">
                Controls
              </button>
            </div>
          </div>
        );

      case 'levelSelect':
        return (
          <div className="level-select">
            <h2>Select Level</h2>
            <div className="levels-grid">
              {Object.entries(levels).map(([key, level]) => (
                <button
                  key={key}
                  className={`level-btn ${!level.unlocked ? 'locked' : ''} ${key === currentLevel ? 'selected' : ''}`}
                  onClick={() => level.unlocked && setCurrentLevel(key)}
                  disabled={!level.unlocked}
                >
                  <div className="level-number">{key}</div>
                  <div className="level-name">{level.name}</div>
                </button>
              ))}
            </div>
            <div className="level-select-actions">
              <button onClick={() => setGameState('menu')} className="menu-btn">
                Back
              </button>
              <button onClick={startGame} className="menu-btn primary">
                Start Level
              </button>
            </div>
          </div>
        );

      case 'playing':
        return (
          <div className="game-container">
            <canvas ref={canvasRef} className="game-canvas" />
            
            {/* Mobile Touch Controls */}
            <div className="touch-controls" style={{ opacity: touchControls.opacity }}>
              <div className="dpad">
                <button
                  className="dpad-btn left"
                  onTouchStart={() => handleTouchStart('left')}
                  onTouchEnd={() => handleTouchEnd('left')}
                  onMouseDown={() => handleTouchStart('left')}
                  onMouseUp={() => handleTouchEnd('left')}
                >
                  ←
                </button>
                <button
                  className="dpad-btn right"
                  onTouchStart={() => handleTouchStart('right')}
                  onTouchEnd={() => handleTouchEnd('right')}
                  onMouseDown={() => handleTouchStart('right')}
                  onMouseUp={() => handleTouchEnd('right')}
                >
                  →
                </button>
              </div>
              
              <div className="action-buttons">
                <button
                  className="action-btn jump"
                  onTouchStart={() => handleTouchStart('jump')}
                  onTouchEnd={() => handleTouchEnd('jump')}
                  onMouseDown={() => handleTouchStart('jump')}
                  onMouseUp={() => handleTouchEnd('jump')}
                >
                  Jump
                </button>
                <button
                  className="action-btn run"
                  onTouchStart={() => handleTouchStart('run')}
                  onTouchEnd={() => handleTouchEnd('run')}
                  onMouseDown={() => handleTouchStart('run')}
                  onMouseUp={() => handleTouchEnd('run')}
                >
                  Run
                </button>
                <button
                  className="action-btn sprint"
                  onTouchStart={() => handleTouchStart('sprint')}
                  onTouchEnd={() => handleTouchEnd('sprint')}
                  onMouseDown={() => handleTouchStart('sprint')}
                  onMouseUp={() => handleTouchEnd('sprint')}
                >
                  Sprint
                </button>
              </div>
            </div>

            {/* Game UI */}
            <div className="game-ui">
              <button onClick={togglePause} className="ui-btn">
                {gameRef.current.isPaused ? '▶️' : '⏸️'}
              </button>
              <button onClick={toggleMute} className="ui-btn">
                {gameRef.current.isMuted ? '🔇' : '🔊'}
              </button>
              <button onClick={() => setShowSettings(true)} className="ui-btn">
                ⚙️
              </button>
            </div>
          </div>
        );

      case 'gameOver':
        return (
          <div className="game-over">
            <h2>Game Over</h2>
            <p>Final Score: {gameRef.current.score}</p>
            <p>Coins Collected: {gameRef.current.coins}</p>
            <div className="game-over-buttons">
              <button onClick={restartGame} className="menu-btn primary">
                Try Again
              </button>
              <button onClick={quitGame} className="menu-btn">
                Main Menu
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="super-mario-game">
      {renderGameState()}

      {/* Settings Modal */}
      {showSettings && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Settings</h3>
            
            <div className="setting-group">
              <label>Difficulty:</label>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Sound Volume:</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={soundVolume}
                onChange={(e) => setSoundVolume(parseFloat(e.target.value))}
              />
            </div>

            <div className="setting-group">
              <label>Music Volume:</label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={musicVolume}
                onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
              />
            </div>

            <div className="setting-group">
              <label>Touch Controls Opacity:</label>
              <input
                type="range"
                min="0.3"
                max="1"
                step="0.1"
                value={touchControls.opacity}
                onChange={(e) => setTouchControls(prev => ({
                  ...prev,
                  opacity: parseFloat(e.target.value)
                }))}
              />
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowSettings(false)} className="menu-btn primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Controls Modal */}
      {showControls && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Controls</h3>
            
            <div className="controls-section">
              <h4>Desktop Controls:</h4>
              <div className="controls-list">
                <div className="control-item">
                  <span className="key">Arrow Keys</span>
                  <span className="action">Move Left/Right</span>
                </div>
                <div className="control-item">
                  <span className="key">Space / Up Arrow</span>
                  <span className="action">Jump</span>
                </div>
                <div className="control-item">
                  <span className="key">Z</span>
                  <span className="action">Run/Fire</span>
                </div>
                <div className="control-item">
                  <span className="key">Shift</span>
                  <span className="action">Sprint</span>
                </div>
                <div className="control-item">
                  <span className="key">P</span>
                  <span className="action">Pause</span>
                </div>
                <div className="control-item">
                  <span className="key">M</span>
                  <span className="action">Mute</span>
                </div>
                <div className="control-item">
                  <span className="key">ESC</span>
                  <span className="action">Menu</span>
                </div>
              </div>
            </div>

            <div className="controls-section">
              <h4>Mobile Controls:</h4>
              <p>Use the on-screen D-pad and action buttons</p>
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowControls(false)} className="menu-btn primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuperMarioGame;