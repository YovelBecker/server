pipeline {
  agent any

  tools {nodejs "nodejs"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm i --silent'
        sh 'node server.js'
      }
    }
  }
}