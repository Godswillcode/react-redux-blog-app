import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import { selectUser } from '../../../features/userSlice';
import { useSelector } from 'react-redux';
import './BlogDisplay.css';