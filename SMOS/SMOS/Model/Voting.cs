namespace SMOS.Model;

public class Voting
{
    //TODO consider adding filetype as in Design

    public Voting(string designName, string designFileType, Guid designId, string artistName,
        int votes) //, bool thisUserVoted)
    {
        DesignName = designName;
        DesignFileType = designFileType;
        DesignId = designId;
        ArtistName = artistName;
        Votes = votes;
        //ThisUserVoted = thisUserVoted;
    }

    public string DesignName { get; }
    public string DesignFileType { get; }
    public Guid DesignId { get; }
    public string ArtistName { get; }

    public int Votes { get; }
    //public bool ThisUserVoted { get; }
    //public DateTime DateOfCreation { get; }
}