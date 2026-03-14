package com.logitrack.backend.repository;

import com.logitrack.backend.model.Manutencao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ManutencaoRepository extends JpaRepository<Manutencao, Long> {
}
