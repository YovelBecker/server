pipeline {
  environment {
    registry = "anishnath/mkdocs"
    registryCredential = 'docker-creds'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      st eps {
        git 'https://github.com/YovelBecker/server.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          sh "docker build -t server-test ."
        }
      }
    }

    stage('Run Image') {
      steps{
        script {
          sh 'docker run --name -p 3000:3000'
        }
      }
    }
  }
}
