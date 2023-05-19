package com.team6.issue_tracker.member;

import com.team6.issue_tracker.member.domain.Member;
import com.team6.issue_tracker.member.domain.dto.MemberTestResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class FooController {
    @GetMapping("/")
    public String hello() {
        return "hello!";
    }

//    @GetMapping("/list")
//    public List<String> list() {
//        List<String> returnList = List.of("test", "test1","test2");
//        return returnList;
//    }
//
//    @RequestMapping("/object")
//    public List<Member> object() {
//        List<Member> returnList = new ArrayList<>();
//        returnList.add(new Member(1L, "member1", false));
//        returnList.add(new Member(2L, "member2", false));
//        returnList.add(new Member(3L, "member3", false));
//        returnList.add(new Member(4L, "member5", true));
//        return returnList;
//    }
//
//    @RequestMapping("/dto")
//    public MemberTestResponse dto() {
//        List<Member> returnList = new ArrayList<>();
//        returnList.add(new Member(1L, "member1", false));
//        returnList.add(new Member(2L, "member2", false));
//        return MemberTestResponse.fromEntity("testList", true, returnList);
//    }
//
//    @GetMapping("/getParameter")
//    @ResponseStatus(value = HttpStatus.OK)
//    public Member getRequestParam(Member member) {
//        if (member.getMemberId().equals("test")) {
//            return member;
//        }
//        return member;
//    }
}
