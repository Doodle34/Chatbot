function getBotResponse(input) {

    var dict = {
        "hello": "Hello!",
        "what is the address of the college": "Sainikpuri, Secunderabad",
        "what are the courses offered in physical science": "B.Sc - Mathematics, Physics & Computer Science (M.P.Cs) <br> B.Sc - Maths, Stats & Computer Science (M.S.Cs) <br> B.Sc - Maths, Electronics & Computer Science (M.E.Cs) <br> B.Sc - Honours - Data Science <br> Bachelor of Computer Applications (BCA)",
        "what are the courses offered in life science": "B.Sc - Biotechnology, Genetics, Chemistry (Bt.G.C) <br> B.Sc - Microbiology, Biotechnology, Chemistry (Mb.Bt.C) <br> B.Sc - Microbiology, Genetics, Chemistry (M.G.C) <br> B.Sc - Biochemistry, Nutrition & Dietetics, Chemistry (Bi.ND.C) ",
        "what are the courses offered in commerce": "B.Com (Computer Application) <br> B.Com <br> B.Com (Honours) <br> B.Com (Hons – Business Analytics)",
        "what are the courses offered in arts": "B.A (Mass Communication, Political Science, Economics) <br> B.A (Mass Communication, Psychology, Economics)",
        "what are the courses offered in management": "Bachelor of Business Administration (B.B.A)",
        "does the college have clubs": "Yes, the college has various clubs like: <br> Fusion Tech Club <br> Literary Club <br> VOICE Club <br> Science Club <br> AIMS Club <br> And many more...",
        "is the college affiliated": "Yes, it is affiliated to Osmania University.",
        "how big is the college": "50 Acres.",
        "does the college provide scholarships": "Yes, the college does provide scholarships.",
        "does the college offer PG and Ph.D": "Yes, the college offers PG and Ph.D",
        "what is the grade given by NAAC": "Grade A",
        "does the college have a placement cell": "Yes, the college has a career guidance and placement cell.",
        "thank you": "I am glad that I could help.",
        "else": "Try asking another query!"

    }
    return dict[input] || dict["else"]
}
