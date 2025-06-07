import { mentoringPage } from "../pages/MentoringPage";

describe("Search", () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.visit("/mentoring");
    });

    it("Search Mentor by Name", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Search button
         * 2. Input the mentor's name in the search field
         * 3. Assert that the search results contain the mentor's name
         */

        const mentorName = "Jenny";

        mentoringPage.inputSearchMentor(mentorName);
        mentoringPage.verifyMentorSearchResult(mentorName);
    });

    it("Search Mentor by Company Experience", () => {

        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Search button
         * 2. Input the skill in the search field
         * 3. Assert that the search results contain mentors with that skill
         */

        const mentorName = "Adira Finances";

        mentoringPage.inputSearchMentor(mentorName);
        mentoringPage.verifyMentorSearchResult(mentorName);
    });

    it("Open details of a mentor", () => {
        /**
         * Created by: Al Khawarismi Atma Pratama
         * Created on: 2025-06-07
         * Updated by: -
         * Updated on: -
         * Summary: 
         * 1. Click on the Search button
         * 2. Input the mentor's name in the search field
         * 3. Click on the mentor's card in the search results
         * 4. Assert that the mentor's details page is displayed
         */

        const mentorName = "Jenny";
        
        mentoringPage.inputSearchMentor(mentorName);
        mentoringPage.clickMentorCard(mentorName);
        mentoringPage.verifyMentorDetails(mentorName);
    });
});