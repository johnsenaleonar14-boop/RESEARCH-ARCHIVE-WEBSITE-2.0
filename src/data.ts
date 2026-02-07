export interface ResearchPaper {
  id: string;
  title: string;
  strand: string;
  year: number;
  type: string;
  author: string;
}

export const MOCK_DATA: ResearchPaper[] = [
  {
    id: '1',
    title: 'Development of a Research Database System for the ACT Research Archive',
    strand: 'TVL-ICT',
    year: 2026,
    type: 'Quantitative',
    author: 'Student Group A'
  },
  {
    id: '2',
    title: 'Impact of AI on Secondary Education Learning Outcomes',
    strand: 'STEM',
    year: 2025,
    type: 'Qualitative',
    author: 'Student Group B'
  },
  {
    id: '3',
    title: 'Sustainable Urban Planning for Developing Cities',
    strand: 'ABM',
    year: 2024,
    type: 'Quantitative',
    author: 'Student Group C'
  },
  {
    id: '4',
    title: 'Automated Attendance System using Facial Recognition',
    strand: 'TVL-ICT ( HARDWARE )',
    year: 2026,
    type: 'Quantitative',
    author: 'Student Group D'
  },
  {
    id: '5',
    title: 'Financial Literacy among Senior High School Students',
    strand: 'ABM',
    year: 2023,
    type: 'Qualitative',
    author: 'Student Group E'
  },
  {
    id: '6',
    title: 'Cultural Preservation through Modern Arts',
    strand: 'ARTS AND DESIGN',
    year: 2024,
    type: 'Qualitative',
    author: 'Student Group F'
  },
  {
    id: '7',
    title: 'Culinary Innovations using Local Ingredients',
    strand: 'TVL-HE',
    year: 2025,
    type: 'Quantitative',
    author: 'Student Group G'
  },
  {
    id: '8',
    title: 'Social Media Usage and Academic Performance',
    strand: 'HUMMS',
    year: 2026,
    type: 'Qualitative',
    author: 'Student Group H'
  }
];
