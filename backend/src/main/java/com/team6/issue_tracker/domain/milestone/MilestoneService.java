package com.team6.issue_tracker.domain.milestone;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class MilestoneService {

    private final MilestoneRepository milestoneRepository;

    public Map<Long, Milestone> getAllMilestones() {
        List<Milestone> milestones = milestoneRepository.findAllByIsDeletedFalse();

        Map<Long, Milestone> milestoneMap = new HashMap<>();
        milestones.forEach(m -> milestoneMap.put(m.getMilestoneIdx(), m));
        return milestoneMap;
    }

    public Milestone findById(Long id) throws NoSuchElementException {
        Milestone milestone = milestoneRepository.findById(id).orElseThrow();

        if (milestone.getIsDeleted()) {
            throw new NoSuchElementException("삭제된 마일스톤입니다.");
        }

        return milestone;
    }
}
