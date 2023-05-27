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

    public Map<Long, Milestone> getAllMilestones() {
        List<Milestone> milestones = milestoneRepository.findAllByIsDeletedFalse();

        Map<Long, Milestone> milestoneMap = new HashMap<>();
        milestones.forEach(m -> milestoneMap.put(m.getMilestoneIdx(), m));
        return milestoneMap;
    }
    }
}
