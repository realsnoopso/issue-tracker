package com.team6.issue_tracker.application.milestone;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public List<Milestone> findAll() {
        return milestoneRepository.findAllByIsDeletedFalse();
    }
}
