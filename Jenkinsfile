pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t frontend-dashboard .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop frontend-dashboard || true
                docker rm frontend-dashboard || true

                docker run -d \
                -p 3000:80 \
                --name frontend-dashboard \
                frontend-dashboard
                '''
            }
        }
    }
}
