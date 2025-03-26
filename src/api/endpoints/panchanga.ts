/**
 * API endpoints for Panchanga (Hindu Astrological Calendar) data
 * Provides daily calculations for tithi, nakshatra, yoga, and karana
 */

import { apiClient } from '../client';
import { PanchangaResponse } from '../types/panchanga';

/**
 * Fetches Panchanga data for a specific date or current date if not provided
 * @param date Optional date string in YYYY-MM-DD format
 * @returns Promise with PanchangaResponse
 */
export const getPanchangaData = async (date?: string): Promise<PanchangaResponse> => {
  try {
    const endpoint = date ? `panchanga?date=${date}` : 'panchanga';
    const response = await apiClient.fetch<PanchangaResponse>(endpoint);
    return response;
  } catch (error) {
    return {
      success: false,
      data: {} as PanchangaResponse['data'],
      error: 'Failed to fetch Panchanga data'
    };
  }
};

/**
 * Fetches Panchanga data for a specific location
 * @param lat Latitude between -90 and 90 degrees
 * @param lon Longitude between -180 and 180 degrees
 * @returns Promise with PanchangaResponse
 */
export const getPanchangaByLocation = async (lat: number, lon: number): Promise<PanchangaResponse> => {
  try {
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      throw new Error('Invalid latitude or longitude values');
    }
    
    const endpoint = `panchanga/location?lat=${lat}&lon=${lon}`;
    const response = await apiClient.fetch<PanchangaResponse>(endpoint);
    return response;
  } catch (error) {
    return {
      success: false,
      data: {} as PanchangaResponse['data'],
      error: error instanceof Error ? error.message : 'Failed to fetch Panchanga data for location'
    };
  }
};

/**
 * Fetches Panchanga data for a specific date and location
 * @param date Date string in YYYY-MM-DD format
 * @param lat Latitude between -90 and 90 degrees
 * @param lon Longitude between -180 and 180 degrees
 * @returns Promise with PanchangaResponse
 */
export const getPanchangaByDateAndLocation = async (
  date: string,
  lat: number,
  lon: number
): Promise<PanchangaResponse> => {
  try {
    if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
      throw new Error('Invalid latitude or longitude values');
    }

    const endpoint = `panchanga/location?date=${date}&lat=${lat}&lon=${lon}`;
    const response = await apiClient.fetch<PanchangaResponse>(endpoint);
    return response;
  } catch (error) {
    return {
      success: false,
      data: {} as PanchangaResponse['data'],
      error: error instanceof Error ? error.message : 'Failed to fetch Panchanga data for date and location'
    };
  }
};
