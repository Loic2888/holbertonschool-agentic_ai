// src/services/insightsService.js
import { insights } from '../data/insights';


export const getInsights = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(insights);
    }, 1000);
  });
};
