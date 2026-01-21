"use client";

import { useState, useCallback } from "react";

export interface CalendarState {
  selectedDates: number[];
  currentMonth: number;
  currentYear: number;
}

export function useCalendar(initialSelectedDates: number[] = []) {
  const [calendarState, setCalendarState] = useState<CalendarState>({
    selectedDates: initialSelectedDates,
    currentMonth: 8, // September (0-indexed)
    currentYear: 2024,
  });

  const toggleDate = useCallback((date: number) => {
    setCalendarState(prev => ({
      ...prev,
      selectedDates: prev.selectedDates.includes(date)
        ? prev.selectedDates.filter(d => d !== date)
        : [...prev.selectedDates, date].sort((a, b) => a - b)
    }));
  }, []);

  const navigateMonth = useCallback((direction: 'prev' | 'next') => {
    setCalendarState(prev => {
      let newMonth = prev.currentMonth;
      let newYear = prev.currentYear;

      if (direction === 'next') {
        newMonth = prev.currentMonth === 11 ? 0 : prev.currentMonth + 1;
        newYear = prev.currentMonth === 11 ? prev.currentYear + 1 : prev.currentYear;
      } else {
        newMonth = prev.currentMonth === 0 ? 11 : prev.currentMonth - 1;
        newYear = prev.currentMonth === 0 ? prev.currentYear - 1 : prev.currentYear;
      }

      return {
        ...prev,
        currentMonth: newMonth,
        currentYear: newYear,
      };
    });
  }, []);

  const getMonthName = useCallback((month: number) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  }, []);

  return {
    calendarState,
    toggleDate,
    navigateMonth,
    getMonthName,
  };
}