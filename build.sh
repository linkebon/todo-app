#!/usr/bin/env bash
cd frontend/react-redux-todo-app/
npm install
cd ../../
./sbt clean buildFrontends packageZipTarball