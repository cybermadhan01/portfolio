// ===================================
// Ultra-Premium 3D Portfolio - Three.js Scene
// ===================================

class HeroScene {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particles = null;
        this.mouse = { x: 0, y: 0 };
        this.targetRotation = { x: 0, y: 0 };

        this.init();
        this.animate();
        this.addEventListeners();
    }

    init() {
        // Scene setup
        this.scene = new THREE.Scene();

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.canvas.clientWidth / this.canvas.clientHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create particle field
        this.createParticleField();

        // Create geometric shapes
        this.createGeometricShapes();

        // Add lighting
        this.addLights();
    }

    createParticleField() {
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x00d4ff);
        const color2 = new THREE.Color(0x8b5cf6);

        for (let i = 0; i < particleCount; i++) {
            // Position
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

            // Color gradient
            const mixRatio = Math.random();
            const color = color1.clone().lerp(color2, mixRatio);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    createGeometricShapes() {
        // Create floating geometric shapes
        const shapes = [];

        // Torus
        const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
        const torusMaterial = new THREE.MeshPhongMaterial({
            color: 0x00d4ff,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.position.set(-2, 1, -3);
        shapes.push(torus);
        this.scene.add(torus);

        // Icosahedron
        const icoGeometry = new THREE.IcosahedronGeometry(0.7, 0);
        const icoMaterial = new THREE.MeshPhongMaterial({
            color: 0x8b5cf6,
            wireframe: true,
            transparent: true,
            opacity: 0.4
        });
        const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
        icosahedron.position.set(2, -1, -2);
        shapes.push(icosahedron);
        this.scene.add(icosahedron);

        // Octahedron
        const octaGeometry = new THREE.OctahedronGeometry(0.5, 0);
        const octaMaterial = new THREE.MeshPhongMaterial({
            color: 0x00ff88,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
        octahedron.position.set(0, 2, -4);
        shapes.push(octahedron);
        this.scene.add(octahedron);

        this.shapes = shapes;
    }

    addLights() {
        // Ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        // Point lights
        const light1 = new THREE.PointLight(0x00d4ff, 1, 100);
        light1.position.set(5, 5, 5);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0x8b5cf6, 1, 100);
        light2.position.set(-5, -5, -5);
        this.scene.add(light2);
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.onResize());
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    }

    onResize() {
        this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }

    onMouseMove(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.targetRotation.x = this.mouse.y * 0.3;
        this.targetRotation.y = this.mouse.x * 0.3;
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate particles
        if (this.particles) {
            this.particles.rotation.x += 0.0005;
            this.particles.rotation.y += 0.001;
        }

        // Rotate geometric shapes
        if (this.shapes) {
            this.shapes.forEach((shape, index) => {
                shape.rotation.x += 0.01 * (index + 1) * 0.5;
                shape.rotation.y += 0.01 * (index + 1) * 0.3;

                // Floating motion
                shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
            });
        }

        // Smooth camera follow mouse
        this.camera.rotation.x += (this.targetRotation.x - this.camera.rotation.x) * 0.05;
        this.camera.rotation.y += (this.targetRotation.y - this.camera.rotation.y) * 0.05;

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize Three.js scene when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new HeroScene('hero-canvas');
    });
} else {
    new HeroScene('hero-canvas');
}
