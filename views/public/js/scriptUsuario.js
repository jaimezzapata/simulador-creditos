import { login, register, agregarUsuario } from "../../../controllers/ControllerUsuario.js";

document.getElementById("btnRegistrar").addEventListener("click", agregarUsuario);
document.getElementById("btnLogin").addEventListener("click", login);
