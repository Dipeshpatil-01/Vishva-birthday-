// --- Three.js Background Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 5000; i++) {
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
    vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffffff, size: 2 }));
scene.add(particles);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += 0.001;
    particles.rotation.y += 0.002;
    renderer.render(scene, camera);
}
animate();

// --- Interactive Terminal Logic ---
const lines = [
    "> Accessing core_memories...",
    "> Locating 'Best_Friend_Data'...",
    "> Success: 1,000,000+ moments found.",
    "> Loading Birthday_Protocol_v3.0...",
    "> CRITICAL: You are an absolute legend.",
    "> HAPPY BIRTHDAY!"
];

function startCelebration() {
    const btn = document.getElementById('action-btn');
    const terminal = document.getElementById('terminal');
    btn.style.display = 'none';
    
    let lineIdx = 0;
    const interval = setInterval(() => {
        if (lineIdx < lines.length) {
            const p = document.createElement('p');
            p.textContent = lines[lineIdx];
            terminal.appendChild(p);
            lineIdx++;
            // Change particle color on success
            if(lineIdx === lines.length) particles.material.color.setHex(0xff00ff);
        } else {
            clearInterval(interval);
        }
    }, 800);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
