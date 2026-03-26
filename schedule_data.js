const asfaScheduleData = [
    // JANUARY
    { month: "January 2026", date: "Jan 17-18", typeRaw: "SW", club: "DFB (Specialty)", city: "Black Canyon City", state: "AZ", region: "10", canceled: false },

    // FEBRUARY
    { month: "February 2026", date: "Feb 14-15", typeRaw: "AB/LCI", club: "LEGS (CANCELLED)", city: "McIntosh Reserve Park, Whitesburg", state: "GA", region: "7", canceled: true },
    { month: "February 2026", date: "Feb 14-15", typeRaw: "SW/LCI", club: "OCRRC (Specialty)", city: "Chino Hills", state: "CA", region: "10", canceled: false },
    { month: "February 2026", date: "Feb 21-22", typeRaw: "AB/LCI", club: "CLCA", city: "Peyton", state: "CO", region: "3", canceled: false },
    { month: "February 2026", date: "Feb 21-22", typeRaw: "SW", club: "DFB (Specialty)", city: "Tonopah", state: "AZ", region: "10", canceled: false },
    { month: "February 2026", date: "Feb 28", typeRaw: "AB", club: "INCIWC", city: "Fairfield", state: "CA", region: "2", canceled: false },

    // MARCH
    { month: "March 2026", date: "Mar 7-8", typeRaw: "AB/LCI", club: "THLC", city: "Hanover Shoe Farm, Littlestown", state: "PA", region: "8", canceled: false },
    { month: "March 2026", date: "Mar 14-15", typeRaw: "AB/LCI", club: "CLCA", city: "Peyton", state: "CO", region: "3*", canceled: false },
    { month: "March 2026", date: "Mar 28-29", typeRaw: "AB/LCI", club: "LEGS", city: "Whitesburg", state: "GA", region: "7", canceled: false },
    { month: "March 2026", date: "Mar 28-29", typeRaw: "AB/LCI", club: "SLASH", city: "Isen Farm, Sorento", state: "IL", region: "6*", canceled: false },
    { month: "March 2026", date: "Mar 28-29", typeRaw: "SW", club: "SWC (Specialty)", city: "Gibson Ranch, Elverta", state: "CA", region: "2", canceled: false },
    { month: "March 2026", date: "Mar 28-29", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8*", canceled: false },

    // APRIL
    { month: "April 2026", date: "Apr 4", typeRaw: "AB/LCI", club: "ICA", city: "Des Moines", state: "IA", region: "5*", canceled: false },
    { month: "April 2026", date: "Apr 4-5", typeRaw: "AB/LCI", club: "LLCC", city: "Estancia", state: "NM", region: "3", canceled: false },
    { month: "April 2026", date: "Apr 4-5", typeRaw: "AB", club: "GASM", city: "Kominek Farm, Limestone", state: "TN", region: "7", canceled: false },
    { month: "April 2026", date: "Apr 4-5", typeRaw: "AB", club: "MBC", city: "Lima", state: "OH", region: "6", canceled: false },
    { month: "April 2026", date: "Apr 4-5", typeRaw: "AB/LCI", club: "SHOT", city: "LaQuest Whippet Haven, Dendron", state: "VA", region: "8*", canceled: false },
    { month: "April 2026", date: "Apr 11", typeRaw: "W", club: "AWC (National Specialty)", city: "Pasco", state: "WA", region: "1", canceled: false },
    { month: "April 2026", date: "Apr 11-12", typeRaw: "AB/LCI", club: "GONE", city: "Waterford", state: "CT", region: "9*", canceled: false },
    { month: "April 2026", date: "Apr 11-12", typeRaw: "AB/LCI", club: "HCA (Cancelled)", city: "Auburn", state: "KS", region: "5*", canceled: true },
    { month: "April 2026", date: "Apr 18-19", typeRaw: "SW", club: "USRCC (Specialty)", city: "Bastian Agricultural Center, South Jordan", state: "UT", region: "3", canceled: false },
    { month: "April 2026", date: "Apr 25-26", typeRaw: "AB/LCI", club: "TSSC", city: "Slippery Rock", state: "PA", region: "8*", canceled: false },
    { month: "April 2026", date: "Apr 25-26", typeRaw: "AB/LCI", club: "MCA", city: "Dakota City Fairgrounds, Farmington", state: "MN", region: "5*", canceled: false },
    { month: "April 2026", date: "Apr 25-26", typeRaw: "AB/LCI", club: "LEGS", city: "McIntosh Reserve Park, Whitesburg", state: "GA", region: "7", canceled: false },
    { month: "April 2026", date: "Apr 25-26", typeRaw: "AB/LCI", club: "CLCA", city: "Peyton", state: "CO", region: "3*", canceled: false },

    // MAY
    { month: "May 2026", date: "May 2-3", typeRaw: "AB/LCI", club: "ICA", city: "Antique Acres, Cedar Falls", state: "IA", region: "5*", canceled: false },
    { month: "May 2026", date: "May 2-3", typeRaw: "AB/LCI", club: "SISFA", city: "Emmett", state: "ID", region: "1*", canceled: false },
    { month: "May 2026", date: "May 2-3", typeRaw: "AB/LCI", club: "CHAMP", city: "Oatlands Plantation, Leesburg", state: "VA", region: "8", canceled: false },
    { month: "May 2026", date: "May 9", typeRaw: "B", club: "BCOA (National Specialty)", city: "Cass County Fairgrounds, Manley", state: "NE", region: "5", canceled: false },
    { month: "May 2026", date: "May 10", typeRaw: "SD", club: "SDCA (National Specialty)", city: "Shamrock Sporting Clays, Rockwood", state: "PA", region: "8", canceled: false },
    { month: "May 2026", date: "May 9-10", typeRaw: "AB/LCI", club: "GTCWC", city: "Farmington", state: "MN", region: "5*", canceled: false },
    { month: "May 2026", date: "May 9-10", typeRaw: "AB/LCI", club: "MGA", city: "Lake Erie Metro Park, Rockwood", state: "MI", region: "9", canceled: false },
    { month: "May 2026", date: "May 9-10", typeRaw: "AB/LCI", club: "ORCA", city: "Couch Ranch, Vinita", state: "OK", region: "4", canceled: false },
    { month: "May 2026", date: "May 16-17", typeRaw: "AB/LCI", club: "MWCC", city: "Caledonia", state: "WI", region: "6", canceled: false },
    { month: "May 2026", date: "May 16-17", typeRaw: "AB/LCI", club: "MCA", city: "Rookie Retriever Grounds, Waverly", state: "MN", region: "5", canceled: false },
    { month: "May 2026", date: "May 16-17", typeRaw: "AB/LCI", club: "CLCA", city: "Peyton", state: "CO", region: "3", canceled: false },
    { month: "May 2026", date: "May 21-22", typeRaw: "IW", club: "IWCA (National Specialty)", city: "Grey Summit", state: "MO", region: "5", canceled: false },
    { month: "May 2026", date: "May 22-24", typeRaw: "AB", club: "IHCUS", city: "Antique Acres, Cedar Falls", state: "IA", region: "5", canceled: false },
    { month: "May 2026", date: "May 23", typeRaw: "IB", club: "IHCUS (Specialty)", city: "Antique Acres, Cedar Falls", state: "IA", region: "5", canceled: false },
    { month: "May 2026", date: "May 23", typeRaw: "AB/LCI", club: "CCASH", city: "Arroyo Grande", state: "CA", region: "10", canceled: false },
    { month: "May 2026", date: "May 23-24", typeRaw: "AB/LCI", club: "NAA", city: "Flamborough", state: "ON", region: "9*", canceled: false },
    { month: "May 2026", date: "May 30-31", typeRaw: "SW/LCI", club: "CCA", city: "Chino Hills", state: "CA", region: "10", canceled: false },

    // JUNE
    { month: "June 2026", date: "Jun 1", typeRaw: "S", club: "SCOA (National Specialty)", city: "Purina Farms, Gray Summit", state: "MO", region: "5", canceled: false },
    { month: "June 2026", date: "Jun 6-7", typeRaw: "AB/LCI", club: "NCA", city: "Storz Rugby Field, Omaha", state: "NE", region: "5*", canceled: false },
    { month: "June 2026", date: "Jun 6-7", typeRaw: "AB/LCI", club: "GONE", city: "Blandford", state: "MA", region: "9", canceled: false },
    { month: "June 2026", date: "Jun 13-14", typeRaw: "AB/LCI", club: "OCRRC", city: "Chino Hills", state: "CA", region: "10", canceled: false },
    { month: "June 2026", date: "Jun 20-21", typeRaw: "SW", club: "MWCC (Specialty)", city: "Caledonia", state: "WI", region: "6", canceled: false },

    // JULY
    { month: "July 2026", date: "Jul 4-5", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8", canceled: false },
    { month: "July 2026", date: "Jul 18-19", typeRaw: "AB/LCI", club: "GTCWC", city: "Farmington", state: "MN", region: "5*", canceled: false },
    { month: "July 2026", date: "Jul 18-19", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8", canceled: false },

    // AUGUST
    { month: "August 2026", date: "Aug 1-2", typeRaw: "AB/LCI", club: "GONE", city: "Blandford", state: "MA", region: "9", canceled: false },
    { month: "August 2026", date: "Aug 1-2", typeRaw: "AB/LCI", club: "MDIHC", city: "Hanover Shoe Farms, Littlestown", state: "PA", region: "8*", canceled: false },
    { month: "August 2026", date: "Aug 8-9", typeRaw: "AB/LCI", club: "GLCA", city: "Grass Lake", state: "MI", region: "6", canceled: false },
    { month: "August 2026", date: "Aug 29-30", typeRaw: "SW", club: "WWWA", city: "Roy", state: "WA", region: "1", canceled: false },

    // SEPTEMBER
    { month: "September 2026", date: "Sep 5-6", typeRaw: "IW/LCI", club: "RMIWA (Specialty)", city: "Bennett", state: "CO", region: "3", canceled: false },
    { month: "September 2026", date: "Sep 5-6", typeRaw: "REG IX/AB/LCI", club: "GONE", city: "Starkville", state: "NY", region: "9", canceled: false },
    { month: "September 2026", date: "Sep 5-6", typeRaw: "AB/LCI", club: "MCA", city: "Dakota Cty Fairgrounds, Farmington", state: "MN", region: "5", canceled: false },
    { month: "September 2026", date: "Sep 5-7", typeRaw: "AB/LCI", club: "MDIHC", city: "Hanover Shoe Farms, Littlestown", state: "PA", region: "8*", canceled: false },
    { month: "September 2026", date: "Sep 12", typeRaw: "REG VI", club: "OKIGO", city: "Yellow Springs", state: "OH", region: "6", canceled: false },
    { month: "September 2026", date: "Sep 13", typeRaw: "AB", club: "OKIGO", city: "Yellow Springs", state: "OH", region: "6", canceled: false },
    { month: "September 2026", date: "Sep 12-13", typeRaw: "AB/LCI", club: "LEGS", city: "Whitesburg", state: "GA", region: "7", canceled: false },
    { month: "September 2026", date: "Sep 19-20", typeRaw: "AB/LCI", club: "GTCWC", city: "Farmington", state: "MN", region: "5*", canceled: false },
    { month: "September 2026", date: "Sep 19-20", typeRaw: "AB/LCI", club: "NAA", city: "Flamborough", state: "ON", region: "9*", canceled: false },
    { month: "September 2026", date: "Sep 26-27", typeRaw: "AB", club: "USRCC", city: "Bastian Agricultural Center, South Jordan", state: "UT", region: "3", canceled: false },
    { month: "September 2026", date: "Sep 26-27", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8", canceled: false },
    { month: "September 2026", date: "Sep 26-27", typeRaw: "SW", club: "SANE (Specialty)", city: "Bolduc Farm, Blandford", state: "MA", region: "9*", canceled: false },

    // OCTOBER
    { month: "October 2026", date: "Oct 3", typeRaw: "REG VII/LCI", club: "LEGS", city: "Whitesburg", state: "GA", region: "7", canceled: false },
    { month: "October 2026", date: "Oct 4", typeRaw: "AB/LCI", club: "LEGS", city: "Whitesburg", state: "GA", region: "7", canceled: false },
    { month: "October 2026", date: "Oct 4", typeRaw: "Ba", club: "BaCOA (National Specialty)", city: "Shelbyville", state: "TN", region: "7", canceled: false },
    { month: "October 2026", date: "Oct 3-4", typeRaw: "AB/LCI", club: "ICA", city: "Antique Acres, Cedar Falls", state: "IA", region: "5*", canceled: false },
    { month: "October 2026", date: "Oct 10-11", typeRaw: "AB/LCI", club: "MCA", city: "Rookie Retriever Grounds, Waverly", state: "MN", region: "5", canceled: false },
    { month: "October 2026", date: "Oct 17-18", typeRaw: "AB/LCI", club: "GONE", city: "Griswold", state: "CT", region: "9*", canceled: false },
    { month: "October 2026", date: "Oct 17-18", typeRaw: "AB/LCI", club: "SLASH", city: "Burge Farm, Dix", state: "IL", region: "6*", canceled: false },
    { month: "October 2026", date: "Oct 17-18", typeRaw: "SW", club: "USRCC (Specialty)", city: "Bastian Agricultural Center, South Jordan", state: "UT", region: "3", canceled: false },
    { month: "October 2026", date: "Oct 24-25", typeRaw: "AB/LCI", club: "HCA (Cancelled)", city: "Auburn", state: "KS", region: "5*", canceled: true },
    { month: "October 2026", date: "Oct 24-25", typeRaw: "ASFA II/LCI", club: "ASFA International Invit.", city: "Vinita", state: "OK", region: "4", canceled: false },
    { month: "October 2026", date: "Oct 31-Nov 1", typeRaw: "AB/LCI", club: "NCA", city: "Storz Rugby Field, Omaha", state: "NE", region: "5*", canceled: false },

    // NOVEMBER
    { month: "November 2026", date: "Nov 7-8", typeRaw: "AB/LCI", club: "LLCC", city: "Santa Fe", state: "NM", region: "3", canceled: false },
    { month: "November 2026", date: "Nov 21-22", typeRaw: "AB/LCI", club: "RMIWA (Specialty)", city: "Bennett", state: "CO", region: "3*", canceled: false },
    { month: "November 2026", date: "Nov 27-29", typeRaw: "REG X/LCI", club: "OCRRC", city: "Chino Hills", state: "CA", region: "10", canceled: false },
    { month: "November 2026", date: "Nov 27-29", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8", canceled: false },

    // DECEMBER
    { month: "December 2026", date: "Dec 5-6", typeRaw: "AB/LCI", club: "TSSC", city: "Slippery Rock", state: "PA", region: "8*", canceled: false },
    { month: "December 2026", date: "Dec 27-28", typeRaw: "AB/LCI", club: "SLASH", city: "Isen Farm, Sorento", state: "IL", region: "6", canceled: false },
    { month: "December 2026", date: "Dec 27-31", typeRaw: "AB/LCI", club: "UCBSC", city: "Hanover", state: "PA", region: "8", canceled: false }
];
