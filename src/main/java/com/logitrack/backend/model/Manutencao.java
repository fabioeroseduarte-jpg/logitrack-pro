package com.logitrack.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "manutencao")
public class Manutencao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long veiculoId;
    private String dataInicio;
    private String dataFinalizacao;
    private String tipoServico;
    private Double custoEstimado;

    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        PENDENTE,
        EM_REALIZACAO,
        CONCLUIDA
    }

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getVeiculoId() {
		return veiculoId;
	}

	public void setVeiculoId(Long veiculoId) {
		this.veiculoId = veiculoId;
	}

	public String getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(String dataInicio) {
		this.dataInicio = dataInicio;
	}

	public String getDataFinalizacao() {
		return dataFinalizacao;
	}

	public void setDataFinalizacao(String dataFinalizacao) {
		this.dataFinalizacao = dataFinalizacao;
	}

	public String getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(String tipoServico) {
		this.tipoServico = tipoServico;
	}

	public Double getCustoEstimado() {
		return custoEstimado;
	}

	public void setCustoEstimado(Double custoEstimado) {
		this.custoEstimado = custoEstimado;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

    
}
