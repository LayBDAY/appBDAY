/*
const video = document.getElementById('camera');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('captureBtn');
const rotateBtn = document.getElementById('rotateBtn');
const frameBtn = document.getElementById('frameBtn');
const frameImg = document.getElementById('frame');

let currentCamera = 'user';
let currentFrame = 0;

// 🔹 Lista de marcos
const frames = [
    //cam
  '../assets/Marcos/cam/1.png',
  '../assets/Marcos/cam/2.png',
  '../assets/Marcos/cam/3.png',
  '../assets/Marcos/cam/4.png',
  '../assets/Marcos/cam/5.png',
  '../assets/Marcos/cam/6.png',
  '../assets/Marcos/cam/7.png',
  '../assets/Marcos/cam/8.png',
  '../assets/Marcos/cam/9.png',
  '../assets/Marcos/cam/10.png',
  //text
  '../assets/Marcos/text/1.png',
  '../assets/Marcos/text/2.png',
  '../assets/Marcos/text/3.png',
  '../assets/Marcos/text/4.png',
  '../assets/Marcos/text/5.png',
  '../assets/Marcos/text/6.png',
  '../assets/Marcos/text/7.png',
  '../assets/Marcos/text/8.png',
  '../assets/Marcos/text/9.png',
  '../assets/Marcos/text/10.png',
  '../assets/Marcos/text/11.png',
  '../assets/Marcos/text/12.png',
  '../assets/Marcos/text/13.png',
  '../assets/Marcos/text/14.png',
  '../assets/Marcos/text/15.png',
  '../assets/Marcos/text/16.png',
  '../assets/Marcos/text/17.png',
  '../assets/Marcos/text/18.png',
  '../assets/Marcos/text/19.png',
  '../assets/Marcos/text/20.png',
  '../assets/Marcos/text/21.png',
  '../assets/Marcos/text/22.png',
  '../assets/Marcos/text/23.png',
  '../assets/Marcos/text/24.png',
  '../assets/Marcos/text/25.png',
  '../assets/Marcos/text/26.png',
  '../assets/Marcos/text/27.png',
  '../assets/Marcos/text/28.png',
  '../assets/Marcos/text/29.png',
  '../assets/Marcos/text/30.png',
  //stickers
  '../assets/Marcos/stickers/31.png',
  '../assets/Marcos/stickers/32.png',
  '../assets/Marcos/stickers/33.png',
  '../assets/Marcos/stickers/34.png',
  '../assets/Marcos/stickers/35.png',
  '../assets/Marcos/stickers/36.png',
  '../assets/Marcos/stickers/37.png',
  '../assets/Marcos/stickers/38.png',
  '../assets/Marcos/stickers/39.png',
  '../assets/Marcos/stickers/40.png',
  '../assets/Marcos/stickers/41.png',
  '../assets/Marcos/stickers/42.png',
  '../assets/Marcos/stickers/43.png',
  '../assets/Marcos/stickers/44.png',
  '../assets/Marcos/stickers/45.png',
  '../assets/Marcos/stickers/46.png',
  '../assets/Marcos/stickers/47.png',
  '../assets/Marcos/stickers/48.png',
  '../assets/Marcos/stickers/49.png',
  '../assets/Marcos/stickers/50.png',
  '../assets/Marcos/stickers/51.png',
  '../assets/Marcos/stickers/52.png',
  '../assets/Marcos/stickers/53.png'
];

// 🎥 Iniciar cámara
async function startCamera() {
  if (video.srcObject) {
    video.srcObject.getTracks().forEach(track => track.stop());
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: currentCamera }
  });

  video.srcObject = stream;
}

// 📸 Capturar foto
captureBtn.addEventListener('click', () => {
  const ctx = canvas.getContext('2d');

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Video
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Marco
  const frame = new Image();
  frame.src = frameImg.src;
  frame.onload = () => {
    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

    const photo = canvas.toDataURL('image/png');

    // Aquí luego:
    // guardar / descargar / subir
    console.log('Foto capturada', photo);
  };
});

// 🔄 Rotar cámara
rotateBtn.addEventListener('click', () => {
  currentCamera = currentCamera === 'user' ? 'environment' : 'user';
  startCamera();
});

// 🖼 Cambiar marco
frameBtn.addEventListener('click', () => {
  currentFrame = (currentFrame + 1) % frames.length;
  frameImg.src = frames[currentFrame];
});

// 🚀 Inicializar
startCamera();
*/
