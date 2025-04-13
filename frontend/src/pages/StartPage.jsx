import { useState } from 'react';
import GameBoard from '../components/GameBoard';
import ScorePanel from '../components/ScorePanel';

export default function StartPage() {
    return (
        <div className="start-page" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            backgroundColor: '#282c34', 
            color: 'white', 
            textAlign: 'center' 
        }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Balatro Card Game</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                Welcome to the ultimate card game experience!
            </p>
            <button style={{ 
                padding: '1rem 2rem', 
                fontSize: '1.25rem', 
                backgroundColor: '#61dafb', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                color: '#282c34' 
            }} 
                onClick={() => window.location.href = '/game'}>
                Start Game
            </button>
        </div>
    );
}