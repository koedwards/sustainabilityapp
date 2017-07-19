/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by ForgeSDK Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk ForgeSDK configuration

  // this this callback URL when creating your client ID and secret
  callbackURL: process.env.FORGE_CALLBACK_URL || 'https://bomviewer.herokuapp.com/api/google/callback/oauth',

  // set enviroment variables or hard-code here
  credentials: {
    client_id: process.env.FORGE_CLIENT_ID || 'eNyBwOsNrRvdUiTUvmqdiMM8Wh3MgG3I',
    client_secret: process.env.FORGE_CLIENT_SECRET || 'LOMCEJ3cu75jwvFQ',
  },

  // Required scopes for your application on server-side
  scopeInternal: ['data:read', 'data:write', 'data:create', 'data:search', 'bucket:create', 'bucket:read', 'bucket:update', 'bucket:delete'],
  // Required scope of the token sent to the client
  scopePublic: ['data:read'],

  // google configuration
  google: {
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'https://bomviewer.herokuapp.com/api/google/callback/oauth',
    credentials: {
      client_id: process.env.GOOGLE_CLIENT_ID || '174560695407-kuoaig0hgs7f0m62g3bj25vkn9mljtb2.apps.googleusercontent.com',
      client_secret: process.env.GOOGLE_CLIENT_SECRET || 'sGRC25cCSr1HJ_HoK0kbH5Pp'
    }
  }
};