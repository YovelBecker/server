pipeline {
    agent { dockerfile true }
    stages {
        stage('Deploy') {
            steps {
                sh 'docker-compose up --build'
            }
        }
    }
}
