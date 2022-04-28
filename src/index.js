import { buildUI, getLocal } from './modules/ui.js'

const projects = getLocal();

buildUI(projects);

localStorage.setItem('projects', JSON.stringify(projects))

