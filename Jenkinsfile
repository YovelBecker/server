pipeline {
  agent any

  tools {nodejs "NodeJs"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm i --silent'
      }
    }
    stage('Start') {
      steps {
        sh 'node server.js'
      }
    }
  }
}
