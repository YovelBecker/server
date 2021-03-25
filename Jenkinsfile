pipeline {
  agent any

  tools {
    nodejs "NodeJs"
    docker "Docker"
  }
    
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
