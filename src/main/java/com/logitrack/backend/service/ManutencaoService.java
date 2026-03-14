package com.logitrack.backend.service;

import com.logitrack.backend.model.Manutencao;
import com.logitrack.backend.repository.ManutencaoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManutencaoService {
    private final ManutencaoRepository repository;

    public ManutencaoService(ManutencaoRepository repository) {
        this.repository = repository;
    }

    public List<Manutencao> listar() {
        return repository.findAll();
    }

    public Manutencao criar(Manutencao manutencao) {
        return repository.save(manutencao);
    }

    public Manutencao atualizar(Long id, Manutencao manutencao) {
        manutencao.setId(id);
        return repository.save(manutencao);
    }

    public void excluir(Long id) {
        repository.deleteById(id);
    }
}
