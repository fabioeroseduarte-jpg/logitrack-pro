package com.logitrack.backend.controller;

import com.logitrack.backend.model.Manutencao;
import com.logitrack.backend.service.ManutencaoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manutencoes")
@CrossOrigin(origins = "http://localhost:4200") // libera acesso para o Angular
public class ManutencaoController {
    private final ManutencaoService service;

    public ManutencaoController(ManutencaoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Manutencao> listar() {
        return service.listar();
    }

    @PostMapping
    public Manutencao criar(@RequestBody Manutencao manutencao) {
        return service.criar(manutencao);
    }

    @PutMapping("/{id}")
    public Manutencao atualizar(@PathVariable Long id, @RequestBody Manutencao manutencao) {
        return service.atualizar(id, manutencao);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Long id) {
        service.excluir(id);
    }
}
