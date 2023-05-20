# member init
INSERT `issue_tracker_schema`.member (member_idx, id, password, profile_image_url, github_join)
    VALUES (1, 'iirin', '1234', '', true),
            (2, 'roy', '1234', '', false),
            (3, 'snoop', '1234', '', true),
            (4, 'sarangDaddy', '1234', '', false);

# issue init
INSERT `issue` (issue_idx, issue_title, issue_contents, issue_status, issue_created_at, issue_deleted, member_idx_writer, member_idx_assignee)
VALUES (1, 'test issue', '테스트 이슈입니다.', 1, now(), 0, 1, 2);

# comment init
INSERT comment (comment_idx, contents, created_at, edited_at, state, issue_idx, created_by)
VALUES (1, 'test comment', now(), null, 1, 1, 2);
