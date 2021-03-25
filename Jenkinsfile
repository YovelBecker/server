pipeline {
  agent any

  tools {docker "Docker"}
    
  stages {
     
    stage('Build') {
      steps {
        sh 'npm i --silent'
      }
    }
    stage('Start') {
      steps {
        sh 'docker-compose up --build'
      }
    }
  }
}
