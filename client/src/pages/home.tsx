import { Cloak } from '../exports/AboutBlank.ts';
import { Version_Label } from '../components/Version_Label.tsx';
import { Credits_Label } from '../components/Credits_label.tsx';
import { useState, useEffect } from 'react';
import '../App.css';

export function Home() {
  return(
    <main>
      <div>
        <Credits_label />
        <Version_Label />
      </div>
    </main>
  );
}