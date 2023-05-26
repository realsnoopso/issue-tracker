package com.team6.issue_tracker.application.label;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public List<Label> findAll() {
        List<Label> labelList = new ArrayList<>();
        labelRepository.findAllNotDeleted().forEach(labelList::add);
        return labelList;
    }
}
