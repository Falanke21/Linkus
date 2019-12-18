import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  iconSection: {
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  mainSection: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0,
  },
  loginButtonSection: {
    height: '20%',
    width: '100%',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  bottomSection: {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
  },

  inputBar: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  signupFormInputSection: {
    flexDirection: 'column',
    height: '50%',
    width: '90%',
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#062958',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
