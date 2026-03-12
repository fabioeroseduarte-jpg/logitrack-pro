# Usando imagem oficial do OpenJDK
FROM openjdk:17-jdk-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo JAR gerado pelo Maven
COPY target/logitrack-backend.jar app.jar

# Expor a porta do Spring Boot
EXPOSE 8080

# Comando para rodar a aplicação
ENTRYPOINT ["java", "-jar", "app.jar"]
