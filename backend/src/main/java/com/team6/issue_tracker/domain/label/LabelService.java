package com.team6.issue_tracker.domain.label;

import com.team6.issue_tracker.domain.issue.Labeling;
import com.team6.issue_tracker.domain.label.dto.LabelDto;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class LabelService {

    private final LabelRepository labelRepository;

    public LabelService(LabelRepository labelRepository) {
        this.labelRepository = labelRepository;
    }

    public Map<Long, LabelDto> getAllLabels() {
        Map<Long, LabelDto> labels = new HashMap<>();
        labelRepository.findAllNotDeleted().forEach(l -> labels.put(l.getLabelIdx(), LabelDto.of(l)));
        return labels;
    }

    public Iterable<Label> findAllById(Collection<Labeling> values) {
        return labelRepository.findAllById(values.stream()
                .map(Labeling::getLabelIdx)
                .collect(Collectors.toList()));
    }
}
