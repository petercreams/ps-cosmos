import axios from 'axios';

const URL = "https://api.spacexdata.com/v4";

async function getStarlink() {
  try {
    const response = await fetch(`${URL}/starlink`)
    const json = await response.json();
    return json;
  } catch (event) {
    console.error(event);
  }
}

async function getCapsules() {
  try {
    const response = await axios.get(`${URL}/capsules`)
    return response.data;
  } catch (event) {
    console.error(event);
  }
}

async function getCrew() {
  try {
    const response = await fetch(`${URL}/crew`)
    const json = await response.json();
    return json;
  } catch (event) {
    console.error(event);
  }
}

async function getRockets() {
  try {
    const response = await fetch(`${URL}/rockets`)
    const json = await response.json();
    return json;
  } catch (event) {
    console.error(event);
  }
}

export {
  getStarlink,
  getRockets,
  getCrew,
  getCapsules
};