<template>
    <img src="/gradients/Meshgrad-blue.png" alt="" width="100" height="100" />
</template>
  
<style scoped>
img {
    animation: blue 10s linear infinite;
    height: 30%;
    margin: 3em 0 0;
    object-fit: contain;
    width: 100%;
    z-index: 100;
    left: 10%;
    bottom: 35%;
    position: absolute;
    filter: brightness(0.9);
}

@keyframes blue {
    0% { transform: translateY(0); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(0); }
}
</style>