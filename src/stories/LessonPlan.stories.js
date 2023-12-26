import LessonPlan from './LessonPlan'

export default {
  title: 'LessonPlan/Component',
  component: LessonPlan,
}

export const Primary = {
  args: {
    label: 'LessonPlan',
    outerSubmit: undefined,
    onSubmit: (data) => console.log(data, 'data'),
    LessonPlanObj: [
      {
        topicName: 'Hello',
        selected: false,
        topicDescription: 'sjhcvbschb iugsd iub',
        contentData: '',
        uploadContent: [
          'https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/Simulator Screenshot - IPhone 13 - 2023-12-22 at 13.20.14.png',
          'https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/Simulator Screenshot - IPhone 13 - 2023-12-22 at 13.20.14.png',
          'https://svbk-lms.s3.ap-south-1.amazonaws.com/aautie/Screenshot 2023-12-07 at 4.03.38 PM.png',
        ],
        subTopics: [],
      },
    ],
  },
}

export const Primary2 = {
  args: {
    label: 'LessonPlan',
    outerSubmit: false,
    LessonPlanObj: [
      {
        topicName: 'Hello',
        selected: false,
        topicDescription: 'sjhcvbschb iugsd iub',
        contentData: '',
        uploadContent: [],
        subTopics: [],
      },
    ],
  },
}
