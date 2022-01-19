import React from 'react';
import Sidebar from './components/Sidebar';
import "./assets/fonts/font-awesome-4.2.0/css/font-awesome.min.css";
import "./assets/css/normalize.css";
import "./assets/css/sidebar.css";

const menus = {
    slide: { buttonText: 'Slide', items: 1 },
    stack: { buttonText: 'Stack', items: 1 },
    elastic: { buttonText: 'Elastic', items: 1 },
    bubble: { buttonText: 'Bubble', items: 1 },
    push: { buttonText: 'Push', items: 1 },
    pushRotate: { buttonText: 'Push Rotate', items: 2 },
    scaleDown: { buttonText: 'Scale Down', items: 2 },
    scaleRotate: { buttonText: 'Scale Rotate', items: 2 },
    fallDown: { buttonText: 'Fall Down', items: 2 },
    reveal: { buttonText: 'Reveal', items: 1 }
};

function App() {
    return <Sidebar menus={menus} />;
}

export default App;