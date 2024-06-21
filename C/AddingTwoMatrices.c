#include<stdio.h>

int main()
{
    int row1,col1;

    printf("Enter the number of row:");
    scanf("%d",&row1);

    printf("Enter the number of column:");
    scanf("%d",&col1);

    int MatrixA[row1][col1],MatrixB[row1][col1];

    printf("Enter %d elements of matrix A:",row1*col1);

    for(int i=0; i<row1;i++)
    {
        for(int j=0;j<col1;j++)
        {
            scanf("%d",&MatrixA[i][j]);
        }
    }

    printf("Enter %d elements of matrix B:",row1*col1);

    for(int i=0; i<row1;i++)
    {
        for(int j=0;j<col1;j++)
        {
            scanf("%d",&MatrixB[i][j]);
        }
    }

    int sum[row1][col1];

    printf("After Addition ");

    for(int i=0; i<row1;i++)
    {
        for(int j=0;j<col1;j++)
        {
            sum[i][j]= MatrixA[i][j] + MatrixB[i][j];
        }
    }

    for(int i=0; i<row1;i++)
    {
        for(int j=0;j<col1;j++)
        {
            printf("%d ,",sum[i][j]);
        }
        printf("\n");
    }
}