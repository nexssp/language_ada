with Ada.Text_IO;
procedure main is

    begin

      loop
        exit when Ada.Text_IO.End_Of_File;
        Ada.Text_IO.Put_Line("Echo" &Ada.Text_IO.Get_Line);
      end loop;
end main;