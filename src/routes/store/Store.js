import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import Card  from '../store/Slices/Card';

export default configureStore({
    reducer: {Card},
    
});



