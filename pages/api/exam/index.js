import { ExamPractice } from '../../../data/ExamPracticeQuestions';

export default function handler(req, res) {
  res.status(200).json(ExamPractice);
}
