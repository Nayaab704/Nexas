import mongoose from 'mongoose';

async function getNextSequenceValue(sequenceName) {
  const sequenceDocument = await mongoose.connection.collection('counters').findOneAndUpdate(
    { _id: sequenceName },
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true, setDefaultsOnInsert: true }
  );

  if (!sequenceDocument.value.sequence_value) {
    await mongoose.connection.collection('counters').updateOne(
      { _id: sequenceName },
      { $set: { sequence_value: 100 } }
    );
    return 100;
  }

  return sequenceDocument.value.sequence_value;
}

export { getNextSequenceValue };
