pipeline {
    options { timeout(time: 3, unit: 'MINUTES') }
    agent { docker {
    image 'node:latest'
    args '-v /.cache/yarn'
 } }
    stages {
        stage('build') {
            steps {
	        sh 'yarn'
		sh 'yarn webpack'
            }
        }
    }
}