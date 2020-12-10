<?php

namespace App\Models;

//use GuzzleHttp\Psr7\Request;
use Faker\Provider\File;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Image;
//
use Intervention\Image\ImageManager;
class Employee extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'position_id','photo',  'date_of_emploment', 'phone', 'email', 'salary',  'head',
        'admin_created_id',	'admin_updated_id'];

    public function position() {
        return $this->belongsTo(Position::class);
    }

    // Принимаем должность для назначения руководителя(Head) и возвращаем массив вариантов должностей руководителей.
    public static function getListManager($namePosition) {
        $bAnalyst = ['Junior Business Analyst', 'Business Analyst', 'Senior Business Analyst', 'Team Lead', 'Project Manager',
            'Business Process Owner', 'Business Lead'];
        $brManager =['Junior Business Relationship Manager', 'Business Relationship Manager', 'Senior Business Relationship Manager',
            'Team Lead', 'Project Manager', 'Business Process Owner', 'Business Lead'];
        $svManager = ['Junior Service Manager', 'Service Manager', 'Senior Service Manager',
            'Team Lead', 'Project Manager', 'Business Process Owner', 'Business Lead'];
        $dManager = ['Junior Development Manager', 'Development Manager', 'Senior Development Manager', 'Team Lead',
            'Project Manager', 'Business Process Owner', 'Business Lead'];
        $qM = ['Junior Quality Manager', 'Quality Manager', 'Senior Quality Manager', 'Team Lead', 'Project Manager',
            'Business Process Owner', 'Business Lead'];
        $scM = ['Junior Sourcing Manager', 'Sourcing Manager', 'Senior Sourcing Manager', 'Team Lead',
            'Project Manager', 'Business Process Owner', 'Business Lead'];
        $Developer = ['Junior Developer', 'Developer', 'Senior Developer', 'Team Lead', 'Project Manager',
            'Business Process Owner', 'Business Lead'];
        $Seo = ['Junior SEO', 'SEO', 'Senior SEO', 'Team Lead', 'Project Manager', 'Business Process Owner', 'Business Lead'];
        $Linkbuilder = ['Junior Linkbuilder', 'Linkbuilder', 'Senior Linkbuilder', 'Team Lead', 'Project Manager',
            'Business Process Owner', 'Business Lead'];
        $Support = ['Junior Support', 'Support', 'Senior Support', 'Team Lead', 'Project Manager',
            'Business Process Owner', 'Business Lead'];
        $HeadManagers = ['Team Lead', 'Project Manager', 'Business Process Owner', 'Business Lead', 'Director'];
        $Directors = ['Director'];
        //Иерархия - Junior:     Junior | Specialist | Senior
        //           Specialist: Specialist | Senior
        //           Senior: Senior | Team Lead | Project Manager | Business Process Owner | Business Lead
        //           Team Lead , Project Manager, Business Process Owner, Business Lead:  между собой + директор
        //           Директор: сам себе.
        //           Новые должности. Новый отдел - нужно прописываться полностью подчинение, а
        //                              единичная должность будет - "руководящий состав" + директор.
        //Получаем срез должностей по иерархии

        switch ($namePosition) {
            case 'Junior Business Analyst': return array_slice($bAnalyst, 0, 3);
            case 'Business Analyst': return array_slice($bAnalyst, 1, 2);
            case 'Senior Business Analyst': return array_slice($bAnalyst, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Business Relationship Manager': return array_slice($brManager, 0, 3);
            case 'Business Relationship Manager': return array_slice($brManager, 1, 2);
            case 'Senior Business Relationship Manager': return array_slice($brManager, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Service Manager': return array_slice($svManager, 0, 3);
            case 'Service Manager': return array_slice($svManager, 1, 2);
            case 'Senior Service Manager': return array_slice($svManager, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Development Manager': return array_slice($dManager, 0, 3);
            case 'Development Manager': return array_slice($dManager, 1, 2);
            case 'Senior Development Manager': return array_slice($dManager, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Quality Manager': return array_slice($qM, 0, 3);
            case 'Quality Manager': return array_slice($qM, 1, 2);
            case 'Senior Quality Manager': return array_slice($qM, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Sourcing Manager': return array_slice($scM, 0, 3);
            case 'Sourcing Manager': return array_slice($scM, 1, 2);
            case 'Senior Sourcing Manager': return array_slice($scM, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Developer': return array_slice($Developer, 0, 3);
            case 'Developer': return array_slice($Developer, 1, 2);
            case 'Senior Developer': return array_slice($Developer, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior SEO': return array_slice($Seo, 0, 3);
            case 'SEO': return array_slice($Seo, 1, 2);
            case 'Senior SEO': return array_slice($Seo, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Linkbuilder': return array_slice($Linkbuilder, 0, 3);
            case 'Linkbuilder': return array_slice($Linkbuilder, 1, 2);
            case 'Senior Linkbuilder': return array_slice($Linkbuilder, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Junior Support': return array_slice($Support, 0, 3);
            case 'Support': return array_slice($Support, 1, 2);
            case 'Senior Support': return array_slice($Support, 2, 5);
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            case 'Team Lead': return array_slice($HeadManagers, 0, 5);
            case 'Project Manager': return array_slice($HeadManagers, 0, 5);
            case 'Business Process Owner': return array_slice($HeadManagers, 0, 5);
            case 'Business Lead': return array_slice($HeadManagers, 0, 5);
            case 'Director': return $Directors;
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////
            default: return array_slice($HeadManagers, 0, 5);
        }
    }
    //Список вариантов для Head исходя из должности
    public static function getListHead($employeePosition)
    {
        $headPositions = self::getListManager($employeePosition);
//      Список ID должностей из справочной таблицы
        $positionsArray = Position::wherein('name', $headPositions)->pluck('id')->toArray();
//      Список ID и ФИО сотрудников, которых могут быть руководителями
        $headName = self::whereIn('position_id', $positionsArray)->get()->pluck('name', 'id')->toArray();
        //return id пользователей
        return $headName;
    }
    //  Принимаем position_id и id. Назначаем других Head подчиненным уволенного сотрудника
    public static function reAppointHead($employeePosition, $id) {
        $employees = self::where('head', $id)->get(); // Подчененные
        if (count($employees)>0) {
            //Список ID сотрудников с такой же должностью
            $sameHeads = self::where('position_id', $employeePosition)->where('id', '!=', $id)->get()->pluck('id')->toArray();

            if ($sameHeads) {
                foreach ($employees as $emp) {
                    $emp->update(['head' => $sameHeads[array_rand($sameHeads)]]);
                }
            } else {
                //Если нет коллег с такой должностью - назначаем им Head из Business Lead
                $position = Position::find($employeePosition);
                $sameHeads = self::getListHead($position);
                //берем случайный ID из возможных Head и назначаем
                foreach ($employees as $emp) {
                    $emp->update(['head' => array_rand($sameHeads)]);
                }
            }
        }

        return true;
    }
    // Заполняем Head сотрудникам исходя из их должности
    public static function setHeadsForPosition($id) {
        $employees = self::where('position_id', $id)->where('head' , 0);

        if ($employees->count() != 0) {
            $listHead = self::getListHead($id);

            foreach ($employees->limit(1000)->get() as $key => $emp) {
                $emp->update(['head' => array_rand($listHead)]);
            };

        } else {
            dd('Complete');
        }

    }

    public static function  uploadImg(Request $request, $img = null)
    {
        $img ? self::deleteImg($img) : null;

        if ($request->hasFile('photo')) {
            self::autorotate();
            $avatar = $request->file('photo');
            $ext = $avatar->getClientOriginalExtension();
            $filename = uniqid() . "." .  $ext;
            $path =  "storage/image/";
            $img = \Intervention\Image\Facades\Image::make($avatar);
            $img->resizeCanvas(300, 300, 'center', false);
            $img->save( "$path$filename",80);

            return "storage/image/".$filename;
        }
        return null;
    }

    public static function deleteImg($img) {
        Storage::delete($img);
    }
    //Проверяем в изображении мета-данных об ориентации. Если есть - поворачиваем его.
    public static function autorotate() {
        $image = imagecreatefromstring(file_get_contents($_FILES['photo']['tmp_name']));

        $exif = exif_read_data($_FILES['photo']['tmp_name']);
        if (!empty($exif['Orientation'])) {
            switch ($exif['Orientation']) {
                case 8:
                    $image = imagerotate($image, 90, 0);
                    break;
                case 3:
                    $image = imagerotate($image, 180, 0);
                    break;
                case 6:
                    $image = imagerotate($image, -90, 0);
                    break;
            }
        }
        return true;
    }

    public static function noImage() {
        return "storage/no-image.png";
    }





}
