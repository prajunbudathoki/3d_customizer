import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#2E6F40',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './vite.svg',
    fullDecal: './vite.svg'
})

export default state