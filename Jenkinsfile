pipeline {
  
  agent { dockerfile true }
    
  stages {
    stage('deploy') {
      steps {
        sh "docker-compose up --build"
      }
    }
  }
}
